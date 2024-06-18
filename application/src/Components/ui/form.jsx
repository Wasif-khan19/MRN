import { useRef, useState, useEffect } from "react";
import { Switch } from "@/Components/ui/switch";
import { Label } from "@/Components/ui/label";

const Form = () => {
  const [isOpen, setIsOpen] = useState(false);
  const formRef = useRef(null);

  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        onClick={toggleForm}
      >
        Generate new API token
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 backdrop-blur-sm overflow-y-auto h-full flex justify-center items-center">
          <div
            ref={formRef}
            className="bg-white rounded-lg shadow-lg p-4 w-full max-w-sm md:max-w-md"
          >
            <h2 className="text-xl sm:text-lg font-medium text-center mb-4">
              Generate new API token
            </h2>
            <p className="text-gray-600 mb-4 sm:text-base text-center">
              Select the permissions of new token. One permission must be
              selected.
            </p>
            <hr />
            <form>
              <div className="space-y-10 pt-8">
                <div className="flex items-center mb-2 justify-between">
                  <Label htmlFor="airplane-mode">
                    Allow Cross Device Journey
                  </Label>
                  <Switch id="airplane-mode" />
                </div>

                <div className="flex items-center mb-2 justify-between">
                  <Label htmlFor="airplane-mode">
                    Allow Cross Device Journey
                  </Label>
                  <Switch id="airplane-mode" />
                </div>
              </div>
            
              <div className="flex mt-4 justify-between pt-5">
                
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mr-2"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Initialize
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Form;
