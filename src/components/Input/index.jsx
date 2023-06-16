'use client'
import React, { useState } from 'react'
import styles from './styles.module.scss'
import Image from 'next/image';
import { FaRegTrashAlt } from 'react-icons/fa';
import { formatCellphone, formatDate } from '@/utils/masks';

export const Input = ({ label, type, placeholder, required, width, defaultValue, multiple, maxLength, minLength, regex, disabled }) => {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState([]);
  const [value, setValue] = useState(defaultValue);

  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();

    if ((multiple && (files.length <= 5)) || !multiple) {
      if (e.type === "dragenter" || e.type === "dragover") {
        setDragActive(true);
      } else if (e.type === "dragleave") {
        setDragActive(false);
      }
    }
  };

  const handleUpload = function (e) {
    const uploads = e.target.files;
    const fileURLs = Array.from(uploads).map((file) => URL.createObjectURL(file));

    if (multiple && (fileURLs.length + files.length <= 6))
      setFiles((prevFiles) => [...fileURLs, ...prevFiles]);
    else if (!multiple) {
      setFiles([...fileURLs]);
    }

    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const uploads = e.dataTransfer.files;
    const fileURLs = Array.from(uploads).map((file) => URL.createObjectURL(file));

    if (multiple && fileURLs.length + files.length <= 6)
      setFiles((prevFiles) => [...fileURLs, ...prevFiles]);
    else if (!multiple) {
      setFiles([...fileURLs]);
    }

    setDragActive(false);
  };

  const handleImageClick = (index, e) => {
    e.preventDefault();
    e.stopPropagation();

    setFiles((prevFiles) => {
      const updatedFiles = [...prevFiles];
      updatedFiles.splice(index, 1);
      return updatedFiles;
    });
  };

  const handleChange = (event) => {
    let value = event.target.value

    if (regex === "cellphone")
      value = formatCellphone(event.target.value);
    else if (regex === "date")
      value = formatDate(event.target.value);

    setValue(value);
  };

  return type === 'text' || type === "email" || type === "password" ? (
    <div className={styles.formInput} style={{ width: width && width }}>
      <label>{label} {required && <span>*</span>}</label>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required={required}
        maxLength={maxLength}
        minLength={minLength}
        disabled={disabled}
      />
    </div>
  ) : type === 'textarea' ?
    (
      <div className={`${styles.formInput} ${styles.textarea}`}>
        <label>{label} {required && <span>*</span>}</label>
        <textarea required={required} />
      </div>
    ) : type === "file" ? (
      <div className={styles.fileInput}>
        <label className={styles.label}>{label} {required && <span>*</span>}</label>
        <input
          id="fileUpload"
          type={type}
          disabled={files.length >= 5 ? true : false}
          onChange={handleUpload}
          accept=".png, .jpeg, .jpg"
          multiple={multiple}
        />
        <label
          htmlFor="fileUpload"
          className={dragActive ? styles.dragActive : styles.uploadInput}
          onDragEnter={handleDrag}
        >
          {files.length === 0 ? (
            <div>
              {multiple ? (
                <p>Arraste suas fotos aqui, ou <b>adicione</b></p>
              ) :
                <p>Arraste sua foto aqui, ou <b>adicione</b></p>
              }
              <span>JPG, JPEG, PNG</span>
            </div>
          ) :
            Array.from(files).map((file, i) => (
              <div key={i} className={styles.uploads}>
                <Image
                  src={file}
                  width={100}
                  height={100}
                  alt={file}
                />
                <div
                  className={styles.after}
                  onClick={(e) => handleImageClick(i, e)}
                >
                  <FaRegTrashAlt />
                </div>
              </div>
            ))}
          {dragActive && <div className={styles.dragElement} onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div>}
        </label>
      </div>
    ) : undefined
}
