import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";

function Card({ item }) {
  return (
    
  
      <div className=" card mb-4 rounded-3 shadow-sm m-3">
        <div className=" card-header ">
          <h6 className="my-0 fw-normal">{item.planName}</h6>

          <h2 className="card-title pricing-card-title">
            ${item.price}/month
            
          </h2>
        </div>
        <ul className="list-unstyled mt-3 text-start">
          {item.features.map((feature, index) => {
            return (
              <li  key={index}>
                {feature.enabled ? (
                  <span>
                    <TiTick />
                    {feature.name}
                  </span>
                ) : (
                  <>
                    <ImCross size={9} /> <del>{feature.name}</del>
                  </>
                )}
              </li>
            );
          })}
        </ul>
        <button type="button" className="w-100 btn text-light bg-primary">
          Button
        </button>
      </div>
     
   
  );
}

export default Card;
