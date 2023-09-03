import React from "react";
import "./Style/timelineWheel.css";

import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function timelineWheel() {
	let workIconStyles = { background: "#2cc7ff" };
	let schoolIconStyles = { background: "#FBCB0A" };

	return (
		<div className="timeline">
			<br></br>
			<h1 className="title">Timeline</h1>
			<br></br>
			<div className="fadingEffect"></div>
			<VerticalTimeline className="makeItCurve">
				<VerticalTimelineElement
					date={"March 2022 - May 2022 (2 months)"}
					dateClassName="date"
					iconStyle={workIconStyles}
				>
					<h3 className="vertical-timeline-element-title">Freelance</h3>
					<p id="description">
						Working with a frontend development team, mainly help with data
						arrangement.
					</p>
					<p id="program">React | Javascript</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					date={"June 2021 - July 2021 (2 months)"}
					dateClassName="date"
					iconStyle={workIconStyles}
				>
					<h3 className="vertical-timeline-element-title">Accenture</h3>
					<h5 className="vertical-timeline-element-subtitle">
						Internship Program
					</h5>
					<p id="description">
						Working in a backend development team to create APIs for testing the
						performance of two different databases.
					</p>
					<p id="program">Kotlin | Redis | Springboot | Docker</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					date={"June 2019"}
					dateClassName="date"
					iconStyle={schoolIconStyles}
				>
					<h3 className="vertical-timeline-element-title">
						Czech Technical University
					</h3>
					<h5 className="vertical-timeline-element-subtitle">
						Exchange program
					</h5>
					<p>Innovation leadership of industry - MIAS school of business.</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					date={"August 2018 - June 2022"}
					dateClassName="date"
					iconStyle={schoolIconStyles}
				>
					<h3 className="vertical-timeline-element-title">
						Sirindhorn International Institute of Technology, Thammasat
						University
					</h3>
					<h5 className="vertical-timeline-element-subtitle">
						Bachelor of Engineering - CGPA 3.80
					</h5>
					<p id="description">
						Full-time Computer Engineering scholarship student.
					</p>
					<a
						className={`button schoolButton`}
						target="_blank"
						rel="noopener noreferrer"
						href="https://drive.google.com/file/d/1pu9yScVExs5sLfB9Pb9wdD-0EMktsVZ1/view?usp=sharing"
					>
						View Transcript
					</a>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					date={"March 2018 - 1 month"}
					dateClassName="date"
					iconStyle={workIconStyles}
				>
					<h3 className="vertical-timeline-element-title">
						Cambodia International Film Festival
					</h3>
					<h5 className="vertical-timeline-element-subtitle">Volunteer</h5>
					<p id="description">
						Assising a web developer at Bophana in updating the website.
					</p>
					<a
						className={`button schoolButton`}
						target="_blank"
						rel="noopener noreferrer"
						href="https://drive.google.com/file/d/1w8D5Qgq35HOGZDdtKKhxNk5QuldniU07/view?usp=sharing"
					>
						View Certificate
					</a>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					date={"October 2017"}
					dateClassName="date"
					iconStyle={schoolIconStyles}
				>
					<h3 className="vertical-timeline-element-title">
						National Examination
					</h3>
					<h5 className="vertical-timeline-element-subtitle">
						Upper Secondary Education - Overall grade: C
					</h5>
					<p id="description"></p>
					<a
						className={`button schoolButton`}
						target="_blank"
						rel="noopener noreferrer"
						href="https://drive.google.com/file/d/1VpnRY-0vTLkVBkHAUAlohCMZoO__hre9/view?usp=sharing"
					>
						View Certificate
					</a>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					date={"August 2013 - August 2017"}
					dateClassName="date"
					iconStyle={schoolIconStyles}
				>
					<h3 className="vertical-timeline-element-title">
						Cambodia Adventist International School
					</h3>
					<h5 className="vertical-timeline-element-subtitle">
						High school Diploma - CGPA 2.78
					</h5>
					<p id="description"></p>
					<a
						className={`button schoolButton`}
						target="_blank"
						rel="noopener noreferrer"
						href="https://drive.google.com/file/d/1EXY-y421iMGCGuoZFHiwSXpl9FyapaoP/view?usp=sharing"
					>
						View Transcript
					</a>
				</VerticalTimelineElement>
			</VerticalTimeline>
			<br></br>
			<br></br>
			<hr></hr>
			<br></br>
			<br></br>
			<br></br>
		</div>
	);
}

export default timelineWheel;