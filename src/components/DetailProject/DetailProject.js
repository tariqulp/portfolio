import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const DetailProject = () => {
    const { ProjectId } = useParams();
    const [project, setProject] = useState([]);
    useEffect(() => {
        fetch("/data.JSON")
            .then((data) => data.json())
            .then((res) => setProject(res));
    }, []);

    let detailToShow = project.filter((pt) => pt.id == ProjectId);
    console.log(detailToShow);
    useEffect(() => {
        AOS.init();
    });
    return (
        <div
            className="p-5"
            style={{
                backgroundColor: "#1f2833",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <div className="row container">
                <div
                    className="col-md-6 col-sm-12 mb-2"
                    data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                >
                    <img
                        className=""
                        src={detailToShow[0]?.img1}
                        class="img-fluid"
                        alt=""
                    />
                    <img
                        className=""
                        src={detailToShow[0]?.img2}
                        class="img-fluid"
                        alt=""
                    />
                    <img
                        className=""
                        src={detailToShow[0]?.img3}
                        class="img-fluid"
                        alt=""
                    />
                </div>
                <div
                    style={{
                        border: "2px solid #cc6666",
                        borderRadius: "10px",
                        color: "#cc6666",
                    }}
                    className="col-md-6 col-sm-12  p-5"
                    data-aos="fade-left"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                >
                    <h2 className="">
                        {" "}
                        <span className="fw-bold"> Welcome To </span>{" "}
                        <span> {detailToShow[0]?.name}</span>
                    </h2>
                    <p>{detailToShow[0]?.details}</p>
                    <hr />
                    <h6>Features</h6>
                    <p>{detailToShow[0]?.feature}</p>
                    <hr />
                    <h6>Technologies</h6>
                    <p>{detailToShow[0]?.Technologies}</p>
                    <hr />
                    <a
                        style={{ margin: "10px" }}
                        target="_blank"
                        rel="noreferrer"
                        href={detailToShow[0]?.link}
                        className="btn btn-dark my-3"
                    >
                        <FontAwesomeIcon icon={faLink} /> Live Site
                    </a>
                    <a
                        style={{ margin: "10px" }}
                        target="_blank"
                        rel="noreferrer"
                        href={detailToShow[0]?.client}
                        className="btn btn-dark my-3"
                    >
                        <i class="fab fa-github">  Github code link (Frontend)</i>
                    </a>
                    <a
                        style={{ margin: "10px" }}
                        target="_blank"
                        rel="noreferrer"
                        href={detailToShow[0]?.server}
                        className="btn btn-dark my-3"
                    >
                        <i class="fab fa-github">  Github code link (Backend)</i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DetailProject;