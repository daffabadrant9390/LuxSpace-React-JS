import { useLayoutEffect } from "react";
import { addClass } from "helpers/format/classNameModifier";

const useModal = () => {
  useLayoutEffect(() => {
    const useModal = (element) => {
      // modalWrapper => Wrap modalContent and modalOverlay
      const modalWrapper = document.createElement("div");
      // Add classess for modalWrapper
      addClass(
        modalWrapper,
        "fixed inset-0 z-40 flex items-center justify-center w-100 min-h-screen"
      );

      // modalOverlay => The Overlay outside the modalContent
      const modalOverlay = document.createElement("div");
      // Add classess for modalOverlay
      addClass(modalOverlay, "fixed inset-0 bg-black opacity-35");

      // modalContent => The content of modal (video)
      const modalContent = document.createElement("div");
      // Add classess for modalContent
      addClass(modalContent, "bg-white p-0 md:p-6 z-10");
      // Set the innerHTML of modalContent
      modalContent.innerHTML =
        element.target.attributes?.["data-content"]?.value;

      // When modalOverlay clicked, remove the modalWrapper's element
      modalOverlay.addEventListener("click", function () {
        modalWrapper.remove();
      });

      modalWrapper.append(modalOverlay);
      modalWrapper.append(modalContent);
      document.body.append(modalWrapper);
    };

    const modalTriggerBtns = document.querySelectorAll("button.modal-trigger");
    console.log(modalTriggerBtns);
    modalTriggerBtns.forEach((modalTriggerBtn) => {
      modalTriggerBtn.addEventListener("click", useModal);
    });

    return () => {
      modalTriggerBtns.forEach((modalTriggerBtn) => {
        modalTriggerBtn.removeEventListener("click", useModal);
      });
    };
  });
};

export default useModal;
