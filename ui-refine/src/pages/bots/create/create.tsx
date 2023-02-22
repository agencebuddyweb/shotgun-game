import React, { useState } from 'react'
import { useForm, useNavigation } from '@pankod/refine-core'
import CodeEditor from '@uiw/react-textarea-code-editor'

import './create.scss'

export const BotCreate: React.FC = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    sourceCode: `function handleAction(previousRounds: Round[]): Action {

      if(!previousRounds.length) {
        return Action.Reload  
      }
      
      // Add your conditions here. 
      
      // Return either Action.Shoot, Action.Reload or Action.Protect
    
    }`,
    avatar: ''
  })
  const { formLoading, onFinish, redirect } = useForm({
    redirect: false
  })

  const { goBack } = useNavigation()

  const handleSubmit = async () => {
    const response = await onFinish(formValues)

    setFormValues({
      name: '',
      sourceCode: '',
      avatar: ''
    })

    redirect('show', response?.data?.id)
  }

  return (
    <div className="container">
      <div className="columns is-multiline">
        <div className="column is-6 is-offset-3"></div>
        <div className="column is-6 is-offset-3">
          <div className="card mt-4 has-background is-borderless">
            <div className="has-background--honey"></div>
            <div className="card-content m-8">
              <div className="content has-text-light is-size-5">
                <h1 className="has-text-light has-text-centered mt-4">
                  Add new bot shooter
                </h1>
                <form action="">
                  <div className="field mb-2">
                    <label className="label has-text-weight-bold has-text-light mb-0 is-size-5">
                      Name of your bot
                      <span className="has-text-danger">*</span>
                    </label>
                    <div className="control">
                      <input
                        className="input is-size-4"
                        type="text"
                        placeholder="Nicky Larson"
                        required
                        onChange={(e) =>
                          setFormValues({
                            ...formValues,
                            name: e.target.value
                          })
                        }
                        value={formValues.name}
                      />
                    </div>
                  </div>
                  <div className="field mb-2">
                    <label className="label has-text-weight-bold has-text-light mb-0 is-size-5">
                      Avatar
                    </label>
                    <div className="control">
                      <div className="file is-boxed is-fullwidth">
                        <label className="file-label">
                          <input
                            className="file-input"
                            type="file"
                            name="resume"
                            value={formValues.avatar}
                            required
                            onChange={(e) =>
                              setFormValues({
                                ...formValues,
                                avatar: e.target.value
                              })
                            }
                          />
                          <span className="file-cta is-fullwidth has-text-centered">
                            <span className="file-icon">
                              <i className="fas fa-upload"></i>
                            </span>
                            <span className="file-label">
                              {' '}
                              Choose an image…{' '}
                            </span>
                          </span>
                          <span className="file-name has-text-centered is-flex is-align-items-center is-justify-content-center">
                            <span>
                              {' '}
                              Screen Shot 2017-07-29 at 15.54.25.png{' '}
                            </span>
                            <span>
                              <span> -</span>
                              <a className="has-text-danger" href="">
                                {' '}
                                Supprimer{' '}
                              </a>
                            </span>
                          </span>
                        </label>
                      </div>
                    </div>
                    <p className="help">
                      Accepted files: .PNG, .JPG. Minimum size: 200 x 200px
                    </p>
                  </div>
                  <div className="field mb-2">
                    <label className="label has-text-weight-bold has-text-light mb-0 is-size-5">
                      The code of your bot
                      <span className="has-text-danger">*</span>
                      <i
                        className="fa-solid fa-circle-info has-tooltip-bottom ml-1 has-text-success"
                        data-tooltip="Explanation: How to add the code of my bot ?"
                      ></i>
                    </label>
                    <div className="control">
                      <input
                        className="input is-size-4"
                        type="url"
                        placeholder="https://gist.github.com/shotgun-game/7a998376c22d58b451518168abb74cea"
                        required
                        onChange={(e) =>
                          setFormValues({
                            ...formValues,
                            sourceCode: e.target.value
                          })
                        }
                        value={formValues.sourceCode}
                      />

                      <CodeEditor
                        value={formValues.sourceCode}
                        language="js"
                        placeholder="Please enter JS code."
                        onChange={(e) =>
                          setFormValues({
                            ...formValues,
                            sourceCode: e.target.value
                          })
                        }
                        padding={15}
                        data-color-mode="dark"
                        style={{
                          fontSize: 12,
                          backgroundColor: '#f5f5f5',
                          fontFamily:
                            'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace'
                        }}
                      />
                    </div>
                    <p className="help">
                      Past here the url of your github gist.
                    </p>
                    <p className="mt-2 has-text-weight-bold mb-0">
                      Test your bot during a training session
                    </p>
                    <div className="buttons is-flex is-align-items-stretch is-justify-content-center">
                      <button className="button is-grey-darker py-3 is-small">
                        <span className="is-size-6">
                          {' '}
                          Dual training VS Neo{' '}
                        </span>
                      </button>
                      <button className="button is-grey-darker py-3 is-small">
                        <span className="is-size-6">
                          {' '}
                          Dual training VS J. Wick{' '}
                        </span>
                      </button>
                    </div>
                    <button
                      className="button is-warning is-fullwidth mt-4 mb-4"
                      onClick={() => handleSubmit()}
                      type="button"
                    >
                      <span className="is-italic">Fight</span>
                    </button>

                    <a
                      href=""
                      className="no-deco icon-text "
                      onClick={() => goBack()}
                    >
                      <span className="icon mr-1">
                        <i className="fa-solid fa-arrow-left "></i>
                      </span>
                      <span>Go Back</span>
                    </a>
                  </div>
                  {formLoading && <p>Loading</p>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
