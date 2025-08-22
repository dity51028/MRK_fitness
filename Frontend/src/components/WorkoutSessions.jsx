import React from 'react';


const WorkoutSessions = () => {
    return (
        <section className="workout_session">
        <div className="wrapper">
          <h1>TOP WORKOUT SESSION</h1>
          <p>
          Choose a workout session that best suits your fitness 
          goals and schedule
          </p>
          <img src="/img5.jpg" alt="workout" />
        </div>
        <div className="wrapper">
          <h1>FEATURED BOOTCAMPS</h1>
          <p>
          Explore our featured bootcamps and find the perfect fit for 
          your fitness journey.
          </p>
          <div className="bootcamps">
          <div>
                        <h4>Bootcamp 1</h4>
                        <p>Bootcamp 1 Description</p>
                        <p>Price: $100</p>
                        <button>Enroll Now</button>
                    </div>
                    <div>
                        <h4>Bootcamp 2</h4>
                        <p>Bootcamp 2 Description</p>
                        <p>Price: $100</p>
                        <button>Enroll Now</button>
                    </div>
                    <div>
                        <h4>Bootcamp 3</h4>
                        <p>Bootcamp 3 Description</p>
                        <p>Price: $100</p>
                        <button>Enroll Now</button>
                    </div>
          </div>
        </div>
      </section>

    )
}

export default WorkoutSessions
