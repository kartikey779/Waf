import React, { useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { RiAddCircleFill } from "react-icons/ri";
import { Pagination } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Contacts = () => {
  const users = [
    {
      name: "Jane Cooper",
      status: "Valid",
      address: "Delhi",
      phoneNo: "8989898989",
      tags: ["gaming", ""],
    },
    {
      name: "Wade Warren",
      status: "Onboarding",
      address: "Mumbai",
      phoneNo: "0909099090",
      tags: ["music", ""],
    },
    {
      name: "Esther Howard",
      status: "Valid",
      address: "Lucknow",
      phoneNo: "2323232323",
      tags: ["film", "3"],
    },
    {
      name: "John Doe",
      status: "Inactive",
      address: "Kolkata",
      phoneNo: "1234567890",
      tags: ["sports", "reading"],
    },
    {
      name: "Alice Johnson",
      status: "Valid",
      address: "Bangalore",
      phoneNo: "9876543210",
      tags: ["travel", "cooking"],
    },
    {
      name: "Bob Smith",
      status: "Onboarding",
      address: "Hyderabad",
      phoneNo: "5555555555",
      tags: ["fitness", "gaming"],
    },
    {
      name: "Charlie Brown",
      status: "Valid",
      address: "Chennai",
      phoneNo: "4444444444",
      tags: ["photography", "blogging"],
    },
    {
      name: "Diana Prince",
      status: "Inactive",
      address: "Pune",
      phoneNo: "3333333333",
      tags: ["writing", "yoga"],
    },
    {
      name: "Ethan Hunt",
      status: "Valid",
      address: "Jaipur",
      phoneNo: "2222222222",
      tags: ["movies", "hiking"],
    },
    {
      name: "Fiona Gallagher",
      status: "Onboarding",
      address: "Ahmedabad",
      phoneNo: "1111111111",
      tags: ["gardening", "cooking"],
    },
    {
      name: "George Clooney",
      status: "Valid",
      address: "Surat",
      phoneNo: "6666666666",
      tags: ["acting", "directing"],
    },
    {
      name: "Hannah Montana",
      status: "Inactive",
      address: "Nagpur",
      phoneNo: "7777777777",
      tags: ["singing", "dancing"],
    },
    {
      name: "Ian Somerhalder",
      status: "Valid",
      address: "Indore",
      phoneNo: "8888888888",
      tags: ["modeling", "acting"],
    },
    {
      name: "Jack Sparrow",
      status: "Onboarding",
      address: "Patna",
      phoneNo: "9999999999",
      tags: ["piracy", "adventure"],
    },
    {
      name: "Karen Gillan",
      status: "Valid",
      address: "Bhopal",
      phoneNo: "1010101010",
      tags: ["acting", "comedy"],
    },
    {
      name: "Leonardo DiCaprio",
      status: "Inactive",
      address: "Ludhiana",
      phoneNo: "2020202020",
      tags: ["acting", "environment"],
    },
    {
      name: "Monica Geller",
      status: "Valid",
      address: "Amritsar",
      phoneNo: "3030303030",
      tags: ["cooking", "cleaning"],
    },
    {
      name: "Nancy Drew",
      status: "Onboarding",
      address: "Rajkot",
      phoneNo: "4040404040",
      tags: ["detective", "writing"],
    },
    {
      name: "Oscar Wilde",
      status: "Valid",
      address: "Jodhpur",
      phoneNo: "5050505050",
      tags: ["writing", "poetry"],
    },
    {
      name: "Penny Lane",
      status: "Inactive",
      address: "Thane",
      phoneNo: "6060606060",
      tags: ["music", "art"],
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const handleClick = (number) => {
    setCurrentPage(number);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(users.length / itemsPerPage);

  return (
    <div className="container  mt-4 ">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Contacts</h2>
        <div>
          <button className="btn border mx-2">
            <i className="bi bi-apple px-1">
              <MdOutlineFileDownload />
            </i>
            Download CSV
          </button>
          <button className="btn" style={{ borderRadius: "52px",backgroundColor:"#1B1B1B",color:"#FEFEFA" }}>
            <i className="bi bi-apple px-1">
              <RiAddCircleFill />
            </i>
            Add user
          </button>
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
                    backgroundColor:
                      user.status === "Valid" ? "rgba(128, 255, 0, 0.3)" : "rgba(255, 8, 0, 0.3)",
                    color: user.status === "Valid" ? "rgba(0, 158, 96, 1)" : "rgba(255, 8, 0, 1)",
                  }}
                >
                  {user.status}
                </span>
              </td>
              <td>{user.phoneNo}</td>
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
