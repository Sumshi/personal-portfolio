import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement className='vertical-timeline-element--education'
        date="2017 - 2021"
        iconStyle={{ background: "#3e497a", color: "#fff" }}
        icon={<SchoolIcon />}
        >
        <h3 className="vertical-timeline-element-title">
            Parklands Arya High School, Nairobi, Kenya
          </h3>
          <p> KCSE Certificate</p>
          <p> Grade B+ </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement className='vertical-timeline-element--education'
        date="2021 - 2025"
        iconStyle={{ background: "#3e497a", color: "#fff" }}
        icon={<SchoolIcon />}
        >
        <h3 className="vertical-timeline-element-title">
            St Paul`s University, Nairobi, Kenya
          </h3>
          <p>Bachelor of science</p>
          <p> Computer Science </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement className='vertical-timeline-element--education'
        date="2023 - 2024"
        iconStyle={{ background: "#3e497a", color: "#fff" }}
        icon={<SchoolIcon />}
        >
        <h3 className="vertical-timeline-element-title">
            ALX Software Engineering, Nairobi, Kenya
          </h3>
          <p>Full stack developer</p>
          <p> Specialization: Frontend development </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education'
        date="2022 - 2023"
        iconStyle={{ background: "#e9d35b", color: "#fff" }}
        icon={<WorkIcon />}
        >
        <h3 className="vertical-timeline-element-title">
            Frontend developer, Nairobi, Kenya
          </h3>
          <p>Silver link aviation</p>
          <p> Developed and maintained their website </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education'
        date="2024 - present"
        iconStyle={{ background: "#e9d35b", color: "#fff" }}
        icon={<WorkIcon />}
        >
        <h3 className="vertical-timeline-element-title">
            Frontend developer, Nairobi, Kenya
          </h3>
          <p>Upwork freelance</p>
          <p> Remote </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
