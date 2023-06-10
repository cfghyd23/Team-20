import Button from "./Button";

function Drink({ name, price, imagee, desc, id, sendState }) {
  return (
    <div className="flex h-1/4 w-11/12 mx-auto my-2.5 px-5 py-4 bg-gray-100 rounded-2xl">
      <div
        className="bg-cover bg-center bg-no-repeat h-48 w-48 mr-10 rounded-xl"
        style={{
          backgroundImage: `url(${imagee})`,
        }}
      ></div>
      <div className="w-8/12 mr-14 flex-col justify-center align-center">
        <h4 className="text-xl font-bold mb-0.5"> {name} </h4>
        <p className="text-sm font-light mb-2.5"> {desc} </p>
        <h5 className="text-base font-semibold mb-2.5"> ₹{price} </h5>
      </div>
      <Button id={id} sendState={sendState}/>
    </div>
  );
}

export default Drink;
