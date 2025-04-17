const Slide_data = ({icon,title,description}) =>{
    return(
    <div className=" bg-white shadow bg-body rounded br_30  default_section_padding_100">
    <div className="pb-5 icon_image">
      <img src={icon} alt="" />
    </div>
    <h2 className="font_54 fw-bold pb-5">{title}</h2>
    <p className="font_24 text-secondary ">{description}</p>
    <p className="pt-3">
      Read More <i className="fa-solid fa-greater-than ms-1"></i>
    </p>
  </div>
);

}
export default Slide_data;


