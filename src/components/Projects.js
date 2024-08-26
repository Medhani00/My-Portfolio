import { Col,Container,Tab,Row,Nav } from "react-bootstrap";
import { ProjectsCard } from "./ProjectCards";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects  = () =>{

    const projects = [
        {
            title: "Business Startup",
            description: "Design and development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design and development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design and development",
            imgUrl: projImg3,
        },
        {
            title: "Business Startup",
            description: "Design and development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design and development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design and development",
            imgUrl: projImg3,
        },
    ];

 return(
    <section className="project" id="project">
        <Container>
            <Row>
                <Col>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                <Tab.Container id="projects-tabs" defaultActivateKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="third">
                        Tab Three
                        </Nav.Link>
                </Nav.Item>
                </Nav>
                <Tab.Content>
                 <Tab.Pane eventKey="first">
                    <Row>
                       {
                        projects.map((projects,index) =>{
                            return (
                                <ProjectsCard
                                 key={index}
                                 {...projects} />
                            )
                        })

                       } 
                    </Row>
                    </Tab.Pane>   
                    <Tab.Pane eventKey="second">Loren Ipsum</Tab.Pane>
                    <Tab.Pane eventKey="third">Loren Ipsum</Tab.Pane>  
                </Tab.Content>
                </Tab.Container>
                </Col>
            </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
    </section>

 )
}