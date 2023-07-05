import React from "react"
import Heading from "../../common/heading/Heading"
import "./mid.css"

const Mid = () => {
  return (
    <>
      <section className='section1'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO novoStudy' title='Best Online Education Platform' />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis ducimus at, consequuntur culpa quasi accusamus quia fugiat incidunt itaque veritatis..</p>
            <div className='button'>
              <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Mid
