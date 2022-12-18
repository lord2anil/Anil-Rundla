import { Col } from "react-bootstrap";

export const ProjectCard = ({url, title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
    <div className="proj-imgbx">
        <img src={imgUrl} alt='' />
      <div className="proj-txtx">
       <a style={{color:'white'}}  title='Go to Source code' href={url}> <h4>{title}</h4>
        <span>{description}</span></a>
      </div>
    </div>
  </Col>
  )
}
