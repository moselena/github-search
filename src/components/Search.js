import React, { useContext, useState } from 'react'
import { GithubContext } from '../context/github/githubContext'
import { AlertContext } from '../context/alert/alertContext'

export const Search = () => {
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)
    const github = useContext(GithubContext)

    const onSubmit = event => {
        if (event.key !== 'Enter') {
            return
        }

        github.clearUsers()

        if (value.trim()) {
            alert.hide()
            github.search(value.trim())
        } else {
            alert.show('Enter nickname')
        }
    }
    
    return (
        <div className="form-group">
            <input 
                type="text" 
                className="form-control"
                style={{marginBottom: '20px'}}
                placeholder="enter nickname..."
                onKeyPress={onSubmit}
                value={value}
                onChange={event => setValue(event.target.value)}
            />
        </div>
    )
}