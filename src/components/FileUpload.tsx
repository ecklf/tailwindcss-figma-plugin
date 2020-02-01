import { observer } from "mobx-react-lite";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useMst } from "../models/Root";

interface Props {
  className?: string;
}

function FileUpload({ className = "" }: Props) {
  const { configName, errorMessage, readFile } = useMst();

  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.forEach(file => readFile(acceptedFiles[0].name, file));
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <section
      className={`${className} w-full px-4 py-4 text-center border ${
        isDragActive
          ? "bg-gray-200 border-gray-500 text-gray-700"
          : errorMessage
          ? "bg-red-100 text-red-600 border-red-500"
          : configName
          ? "bg-teal-100 text-teal-600 border-teal-500"
          : "text-gray-600 border-gray-500"
      } border-dashed rounded-lg cursor-pointer`}
    >
      <div
        {...getRootProps({
          className: "focus:outline-none"
        })}
      >
        <input {...getInputProps()} />
        <p className="select-none">
          {isDragActive
            ? "Drag your file here 🎉"
            : errorMessage ?? configName ?? "Upload config by drag or click"}
        </p>
      </div>
    </section>
  );
}

export default observer(FileUpload);
