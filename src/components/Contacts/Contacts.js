import React, { useState, useEffect } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { RiAddCircleFill } from "react-icons/ri";
import { Pagination } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import ContactsForm from "../MessageForm/ContactsForm";
import Popup from "reactjs-popup";
import axios from "axios";

const Contacts = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/message/contacts/');
      setUsers(response.data);
    } catch (error) {
      console.error("There was an error fetching the contacts data:", error);
    }
  };

  const handleClick = (number) => {
    setCurrentPage(number);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(users.length / itemsPerPage);

  const exportToExcel = () => {
    // Create a new workbook and a sheet
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(users);

    // Append the sheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    // Generate a buffer
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });

    // Create a Blob from the buffer
    const blob = new Blob([wbout], { type: 'application/octet-stream' });

    // Save the Blob as an Excel file
    saveAs(blob, 'contacts_data.xlsx');
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Contacts</h2>
        <div>
          <button className="btn border mx-2" onClick={exportToExcel}>
            <i className="bi bi-apple px-1">
              <MdOutlineFileDownload />
            </i>
            Download CSV
          </button>
          <Popup
            trigger={
              <button className="btn" style={{ borderRadius: "52px", backgroundColor: "#1B1B1B", color: "#FEFEFA" }}>
                <i className="bi bi-apple px-1">
                  <RiAddCircleFill />
                </i>
                Add user
              </button>
            }
            modal
            nested
          >
            <ContactsForm />
          </Popup>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">No.</th>
            <th scope="col">Name</th>
            <th scope="col">Status</th>
            <th scope="col">Phone no.</th>
            <th scope="col">Address</th>
            <th scope="col">Tags</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((user, index) => (
            <tr key={index} className="bg-white">
              <td>
                <input className="form-check-input" type="checkbox" />
              </td>
              <td>{indexOfFirstItem + index + 1}</td>
              <td>{user.name}</td>
              <td>
                <span
                  className="badge"
                  style={{
                    backgroundColor: user.status === "Valid" ? "rgba(128, 255, 0, 0.3)" : "rgba(255, 8, 0, 0.3)",
                    color: user.status === "Valid" ? "rgba(0, 158, 96, 1)" : "rgba(255, 8, 0, 1)",
                  }}
                >
                  {user.status}
                </span>
              </td>
              <td>{user.phone_number}</td>
              <td>{user.address}</td>
              <td>
                {user.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="badge text-dark border me-1">
                    {tag}
                  </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination>
        <Pagination.First
          onClick={() => handleClick(1)}
          disabled={currentPage === 1}
        />
        <Pagination.Prev
          onClick={() => handleClick(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {[...Array(totalPages)].map((_, number) => (
          <Pagination.Item
            key={number + 1}
            active={number + 1 === currentPage}
            onClick={() => handleClick(number + 1)}
          >
            {number + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => handleClick(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
        <Pagination.Last
          onClick={() => handleClick(totalPages)}
          disabled={currentPage === totalPages}
        />
      </Pagination>
    </div>
  );
};

export default Contacts;
