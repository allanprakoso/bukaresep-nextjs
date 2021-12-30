import Button from "./button";
import { Crossl, Facebook, Instagram, Twitter } from "../../assets/icons";

const ModalDialog = (modal) => {
  return (
    //   modal bg
    <div className="bg-gray-400/30 h-[100vh] absolute inset-0 flex justify-center items-center">
      {/* modal body */}
      <div className="relative bg-white rounded-xl w-[587px]">
        <div id="closeModal" className="flex justify-end mt-4 mx-2">
          <Button type="button" color="LINK">
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Crossl />
            </svg>
          </Button>
        </div>

        <div id="modalContent" className="mx-12 flex flex-col space-y-6 pb-10">
          {/* title */}
          <h3 className="text-h3 text-gray-800 font-bold font-quicksand">
            {modal.title}
          </h3>

          {/* content */}
          <div className="flex flex-col space-y-6">{modal.content}</div>

          {/* footer */}
          <div>
            {/* <div className="border-b-[0.8px] border-gray-200 my-4"></div> */}
            <div className="flex items-center flex-col space-y-2">
              {modal.footer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDialog;
