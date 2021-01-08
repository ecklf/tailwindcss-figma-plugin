import { observer } from "mobx-react-lite";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useMst } from "../models/Root";

interface Props {}

const FileUpload = observer(({}: Props) => {
  const { configName, errorMessage, readFile } = useMst();

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => readFile(acceptedFiles[0].name, file));
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <section
      className={`w-full px-4 py-4 text-center border ${
        isDragActive
          ? "bg-gray-100 border-gray-500 text-gray-700"
          : errorMessage
          ? "bg-red-50 text-red-600 border-red-500"
          : configName
          ? "bg-teal-50 text-teal-600 border-teal-500"
          : "text-gray-600 border-gray-500"
      } border-dashed rounded-lg cursor-pointer`}
    >
      <div
        {...getRootProps({
          className: "focus:outline-none",
        })}
      >
        <input type="file" accept=".json" {...getInputProps()} />
        <p className="select-none">
          {isDragActive
            ? "Drag your file here 🎉"
            : errorMessage ?? configName ?? "Import tailwind.json"}
        </p>
      </div>
    </section>
  );
});

export default FileUpload;
