import { useShow } from '@pankod/refine-core'

import { IBot, IDual } from '../../../interfaces'
import './show.scss'

export const BotShow: React.FC = () => {
  const { queryResult } = useShow<IBot>()

  const { data, isLoading, isError } = queryResult
  const bot = data?.data

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Something went wrong!</div>
  }

  return (
<section className="campaign">
  <div className="bg-parallax bg-parallax-bg"></div>
  <div className="bg-parallax bg-parallax-far"></div>
  <div className="bg-parallax bg-parallax-mid"></div>
  <div className="bg-parallax bg-parallax-close"></div>
  <div className="bg-parallax bg-blur"></div>
  <div className="campaign-wrapper">
    <div className="container has-text-light">
      <div className="columns is-multiline">
        <div className="column is-12">
          <div
            className="is-flex is-align-items-center is-justify-content-flex-start pt-4 pl-3"
          >
            <figure className="avatar is-bordered">
              <img src="./assets/images/avatar-test-01.png" alt="" />
              
            </figure>
            <span
              className="bot-name is-size-4 ml-5 has-text-right has-text-weight-bold"
              >{bot?.name}</span
            >
          </div>
        </div>
        <div className="column is-12 has-text-weight-bold">
          <p>Created on %% March 12th, 2023 at 02:03 p.m.</p>
          <p>Bot id: {bot?.id}</p>
          <p>Rank: {bot?.ranking}</p>
        </div>
      </div>

      <div className="columns is-multiline">
        <div className="column is-12">
          <div
            className="is-flex is-fullwidth is-align-items-center is-justify-content-flex-end fight-list is-flex-direction-column-reverse"
          >
            <div className="vertical-line"></div>
            {bot?.dualsAsChallenger?.map((dual: IDual) => (
              <a
              className="dual is-fullwidth is-flex is-align-items-center is-justify-content-center"
            >
                <div className="challenger">
                  <span className="is-size-5">{dual.challengerWin ? 'You win' : 'You loose'}</span>
                </div>
                <span className="icon-battle mx-4"></span>
                <div className="opponent has-lost">
                  <div
                    className="is-flex is-align-items-center is-justify-content-flex-start"
                  >
                    <figure className="avatar is-small is-bordered">
                      <img src="./assets/images/avatar-test-01.png" alt="" />
                      <i
                        className="fa-solid fa-x is-size-3 has-text-danger loose"
                      ></i>
                    </figure>
                    <span
                      className="bot-name is-size-5 ml-3 has-text-right has-text-weight-bold"
                      >{dual?.defender?.name}</span
                    >
                  </div>
                </div>
              </a>
            ))}
            <a
              className="dual is-fullwidth is-flex is-align-items-center is-justify-content-center"
            >
              <div className="challenger">
                <span className="is-size-5">Fighting...</span>
              </div>
              <span className="icon-battle mx-4"></span>
              <div className="opponent">
                <div
                  className="is-flex is-align-items-center is-justify-content-flex-start"
                >
                  <figure className="avatar is-small is-bordered">
                    <img src="./assets/images/avatar-test-01.png" alt="" />
                    <i
                      className="fa-solid fa-x is-size-3 has-text-danger loose"
                    ></i>
                  </figure>
                  <span
                    className="bot-name is-size-5 ml-3 has-text-right has-text-weight-bold"
                    >Opponent bot</span
                  >
                </div>
              </div>
            </a>
            <a
              className="dual is-fullwidth is-flex is-align-items-center is-justify-content-center"
            >
              <div className="challenger has-lost">
                <span className="is-size-5">You loose</span>
              </div>
              
              <span className="icon-battle mx-4"></span>
              <div className="opponent">
                <div
                  className="is-flex is-align-items-center is-justify-content-flex-start"
                >
                  <figure className="avatar is-small is-bordered">
                    <img src="./assets/images/avatar-test-01.png" alt="" />
                    <i
                      className="fa-solid fa-x is-size-3 has-text-danger loose"
                    ></i>
                  </figure>
                  <span
                    className="bot-name is-size-5 ml-3 has-text-right has-text-weight-bold"
                    >Opponent bot</span
                  >
                </div>
              </div>
            </a>
            <a
              className="dual is-fullwidth is-flex is-align-items-center is-justify-content-center is-coming"
            >
              <div className="challenger"></div>
              <span className="icon-battle mx-4"></span>
              <div className="opponent">
                <div
                  className="is-flex is-align-items-center is-justify-content-flex-start"
                >
                  <figure className="avatar is-small is-bordered">
                    <img src="./assets/images/avatar-test-01.png" alt="" />
                    <i
                      className="fa-solid fa-x is-size-3 has-text-danger loose"
                    ></i>
                  </figure>
                  <span
                    className="bot-name is-size-5 ml-3 has-text-right has-text-weight-bold"
                    >5th</span
                  >
                </div>
              </div>
            </a>
            <a
              className="dual is-fullwidth is-flex is-align-items-center is-justify-content-center is-coming"
            >
              <div className="challenger"></div>
              <span className="icon-battle mx-4"></span>
              <div className="opponent">
                <div
                  className="is-flex is-align-items-center is-justify-content-flex-start"
                >
                  <figure className="avatar is-small is-bordered">
                    <img src="./assets/images/avatar-test-01.png" alt="" />
                    <i
                      className="fa-solid fa-x is-size-3 has-text-danger loose"
                    ></i>
                  </figure>
                  <span
                    className="bot-name is-size-5 ml-3 has-text-right has-text-weight-bold"
                    >4th</span
                  >
                </div>
              </div>
            </a>
            <a
              className="dual is-fullwidth is-flex is-align-items-center is-justify-content-center is-coming"
            >
              <div className="challenger"></div>
              <span className="icon-battle mx-4"></span>
              <div className="opponent">
                <div
                  className="is-flex is-align-items-center is-justify-content-flex-start"
                >
                  <figure className="avatar is-small is-bordered">
                    <img src="./assets/images/avatar-test-01.png" alt="" />
                    <i
                      className="fa-solid fa-x is-size-3 has-text-danger loose"
                    ></i>
                  </figure>
                  <span
                    className="bot-name is-size-5 ml-3 has-text-right has-text-weight-bold"
                    >3rd</span
                  >
                </div>
              </div>
            </a>
            <a
              className="dual is-fullwidth is-flex is-align-items-center is-justify-content-center is-coming"
            >
              <div className="challenger"></div>
              <span className="icon-battle mx-4"></span>
              <div className="opponent">
                <div
                  className="is-flex is-align-items-center is-justify-content-flex-start"
                >
                  <figure className="avatar is-small is-bordered">
                    <img src="./assets/images/avatar-test-01.png" alt="" />
                    <i
                      className="fa-solid fa-x is-size-3 has-text-danger loose"
                    ></i>
                  </figure>
                  <span
                    className="bot-name is-size-5 ml-3 has-text-right has-text-weight-bold"
                    >2nd</span
                  >
                </div>
              </div>
            </a>
            <a
              className="dual is-fullwidth is-flex is-align-items-center is-justify-content-center is-coming"
            >
              <div className="challenger"></div>
              <span className="icon-battle mx-4"></span>
              <div className="opponent">
                <div
                  className="is-flex is-align-items-center is-justify-content-flex-start"
                >
                  <figure className="avatar is-small is-bordered">
                    <img src="./assets/images/avatar-test-01.png" alt="" />
                    <i
                      className="fa-solid fa-x is-size-3 has-text-danger loose"
                    ></i>
                  </figure>
                  <span
                    className="bot-name is-size-5 ml-3 has-text-right has-text-weight-bold"
                    >1st</span
                  >
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
