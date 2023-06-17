'use client'
import React, { useState } from 'react'
import styles from './styles.module.scss'
import Image from 'next/image';
import { FaRegTrashAlt } from 'react-icons/fa';
import { formatCellphone, formatDate, formatMoney } from '@/utils/masks';

export const Input = ({ label, type, placeholder, required, width, defaultValue, multiple, maxLength, minLength, regex, disabled, files, setFiles }) => {
  const [dragActive, setDragActive] = useState(false);
  const [value, setValue] = useState(defaultValue);
  const [quantity, setQuantity] = useState(0);
  const [imagesUrl, setImagesUrl] = useState([]);

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
    const uploadedFiles = Array.from(uploads);
    const fileURLs = Array.from(uploads).map((file) => URL.createObjectURL(file));

    if (multiple && (uploadedFiles.length + files.length <= 6)) {
      setFiles((prevFiles) => [...uploadedFiles, ...prevFiles]);
      setImagesUrl((prevUrls) => [...fileURLs, ...prevUrls]);
    }
    else if (!multiple) {
      setFiles([...uploadedFiles]);
      setImagesUrl(...[fileURLs])
    }

    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const uploads = e.dataTransfer.files;
    const uploadedFiles = Array.from(uploads);
    const fileURLs = Array.from(uploads).map((file) => URL.createObjectURL(file));

    if (multiple && fileURLs.length + files.length <= 6) {
      setFiles((prevFiles) => [...uploadedFiles, ...prevFiles]);
      setImagesUrl((prevUrls) => [...fileURLs, ...prevUrls]);
    }
    else if (!multiple) {
      setFiles([...uploadedFiles]);
      setImagesUrl(...[fileURLs])
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

    setImagesUrl((prevFiles) => {
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
    else if (regex === "money") {
      value = formatMoney(event.target.value.replace(/\D/g, ''));
    }

    setValue(value);
  };

  const handleQuantity = (event) => {
    if (event == "increase") {
      if (quantity >= 0 && quantity < 10) {
        setQuantity(prev => prev += 1)
      }
    } else if (event == "decrease") {
      if (quantity > 0 && quantity <= 10) {
        setQuantity(prev => prev -= 1)
      }
    }
  }

  return type === 'text' || type === "email" || type === "password" || type === "number" ? (
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
  ) : type === 'count' ?
    (
      <div className={styles.formInput} style={{ width: width && width }}>
        <label>{label} {required && <span>*</span>}</label>
        <div style={{ display: 'flex', width: '100%', position: 'relative' }}>
          <input type="button" value="-" onClick={() => handleQuantity("decrease")} className={styles.decrease} />
          <input
            type='number'
            disabled={true}
            value={quantity}
            onChange={e => this.setState({ text: e.target.value })}
            className={styles.quantity}
            placeholder={placeholder}
            required={required}
            style={{ width: '100%', textAlign: 'center' }}
          />
          <input type="button" value="+" onClick={() => handleQuantity("increase")} className={styles.increase} />
        </div>
      </div>
    )
    : type === 'textarea' ?
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
            disabled={files.length >= 6 ? true : false}
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
              Array.from(imagesUrl).map((file, i) => (
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
