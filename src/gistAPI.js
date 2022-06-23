// import { isCompositeComponent } from "react-dom/test-utils"
import NewGist from './components/NewGist'

// import Octokit from '@octokit/rest'

// export const octokit = new Octokit()

const GistClient = require("gist-client")

export const gistClient = new GistClient()

const token = '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'

const myToken = gistClient.setToken(token) 
// && octokit.setToken(token)//To bind token

const desc = gistClient.title

export const MakeGist = async() => {    
    try {
        let data = await myToken.create({
            // "key": {id},                                
            "description": desc,
            "public": "true",
            "files": {
                "README.md": {
                    "content": "Hey it's a brand new gist!"
                }   
            },
        })
        console.log(data)
        return data
    } catch(error) {
            console.log(error)
        }
    }

export const EditGist = async() => {
    try {
        let data = await myToken.update(
            'GIST_ID', {
                'description':'new description'}
                )
                return data
            } catch(error) {
                console.log(error)
            }
        }

export const ListGists = async() => {
    try {
        let data = await myToken.getAll({rawContent: true})
        return data
    } catch(error) {
        console.log(error)
    }
}

export const DelGist = async() => {
   try {
       let deleted = await myToken.delete({})
       return deleted
} catch(error) {
    console.log(error)
}
}

export const createNote = async(gist_id, body) => {
    try {
      let data = await myToken.request(
        'POST /gists/{gist_id}/comments', {
          gist_id,
          body
        });
        console.log(data)
        return data
      } catch(error) {
        console.log(error)
      }
  };

  export const getNote = async(gist_id, comment_id) => {
    try {
      let data = await myToken.request(
      'GET /gists/{gist_id}/comments/{comment_id}', {
      gist_id,
      comment_id
    })
    console.log(data)
    return data
  } catch(error) {
    console.log(error)
  }
  }