import Button from "./Button";
import { Crossl } from "../assets/icons";
import disableScroll from "disable-scroll";
import { useEffect } from 'react';
import { Dialog } from '@headlessui/react'

const Modal = ({ children, show, onClose }) => {

  return (
    // wrapper & bg
    <>
      <Dialog onClose={onClose} open={show}>
        <div className="modalbg bg-gray-400/30 h-[100vh] fixed inset-0 flex justify-center items-center overflow-y:hidden">
          <div className="modalbody relative bg-white rounded-xl w-[587px] ">
            <div id="closeModal" className="flex justify-end mt-4 mx-2">
              <Button
                type="button"
                color="LINK"
                onClick={() => onClose(false)}
              >
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
            <div id="modalContent" className="mx-12 flex flex-col pb-8">
              {children}
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

const ModalTitle = ({ children }) => {
  return (
    <h3 className="text-h3 text-gray-800 font-bold font-quicksand">
      {children}
    </h3>
  );
};

const ModalContent = ({ children }) => {
  return <div className="flex flex-col space-y-6 my-4">{children}</div>;
};

const ModalFooter = ({ children }) => {
  return (
    <div className="border-t-[0.8px] border-gray-200 pt-4 mt-8">
      <div className="flex items-center flex-col space-y-1">{children}</div>
    </div>
  );
};

module.exports = { Modal, ModalTitle, ModalContent, ModalFooter };
