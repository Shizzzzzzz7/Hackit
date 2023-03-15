import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWorkHistory } from "react-icons/md";
import { IoIosSchool } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
const Timeline = () => {
  return (
    <div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(190,24,93)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(190,24,93)" }}
          date="25 Mar - 5Apr"
          iconStyle={{ background: "rgb(190,24,93)", color: "#fff" }}
          icon={<IoIosSchool />}
        >
          <h1 className="text-slate-200 font-bold text-xl">
            REGISTRATION BEGINS
          </h1>
          <p>
            Registration opens up for students to register with their respective
            teams and project ideas for Hackathon.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(183,42,32)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(183,42,32)" }}
          date="6 Apr - 8 Apr"
          iconStyle={{ background: "rgb(183,42,32)", color: "#fff" }}
          icon={<IoIosSchool />}
        >
          <h1 className="text-slate-200 font-bold text-xl">PHASE 1 RESULT</h1>
          <p>
            Top 100 teams will be selected based on Idea submission for Round 2
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(190,24,93)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(190,24,93)" }}
          date="15 Apr - 17 Apr"
          iconStyle={{ background: "rgb(190,24,93)", color: "#fff" }}
          icon={<IoIosSchool />}
        >
          <h1 className="text-slate-200 font-bold text-xl">
            HOUSE OF HACKERS MAIN EVENT
          </h1>
          <p>
            House of Hackers will be a two-day event consisting of various guest
            lectures, workshops, and project evaluation.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(183,42,32)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(183,42,32)" }}
          date="17 Apr"
          iconStyle={{ background: "rgb(183,42,32)", color: "#fff" }}
          icon={<IoIosSchool />}
        >
          <h1 className="text-slate-200 font-bold text-xl">RESULT DECLARATION</h1>
          <p>
            The ultimate genius will be revealed by our Judging Panel on 17th
            April 2023 through our social media handles
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};
export default Timeline;
