const Slide_data = ({icon,title,description}) =>{
    return(
    <div>
    <div>
      <i className={` ${icon} icon_background p-3 fs-3 text-white rounded-circle bg-primary`}></i>
    </div>
    <h2 className="font_58 fw-bold">{title}</h2>
    <p className="font_24 text-secondary">{description}</p>
    <p className="pt-3">
      Read More <i className="fa-solid fa-greater-than ms-1"></i>
    </p>
  </div>
);

}
export default Slide_data;

