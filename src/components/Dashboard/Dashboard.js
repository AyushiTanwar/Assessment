import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Dashboard() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    phoneNumber: "",
    address: "",
  });
  const [errors, seterrors] = useState({});
  const [list, setlist] = useState([]);
  const deleteUser = (itm) => {
    let l = list.filter((x) => {
      return x.phoneNumber != itm.phoneNumber;
    });
    setlist(l);
    localStorage.setItem("list", JSON.stringify(l));
  };

  useEffect(() => {
    if (localStorage.getItem("list")) {
      setlist(JSON.parse(localStorage.getItem("list")));
    }
  }, []);

  const validate = () => {
    let obj = {};
    let error = false;
    if (!data.name) {
      error = true;
      obj.name = "Name is required";
    }
    if (!data.phoneNumber) {
      error = true;
      obj.phoneNumber = "Phone number is required";
    } else if (data.phoneNumber.length > 10) {
      error = true;
      obj.phoneNumber = "Phone number should not exceed 10 digits";
    }
    if (!data.address) {
      error = true;
      obj.address = "Address is required";
    }
    seterrors(obj);
    return !error;
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          marginTop: "0.5rem",
          marginRight: "1rem",
        }}
      >
        <button
          type="submit"
          style={{
            padding: ".3rem",
            width: "6rem",
            borderRadius: "1rem",
            backgroundColor: "black",
            color: "white",
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/");
          }}
        >
          Logout
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          marginTop: "0.5rem",
          marginRight: "1rem",
        }}
      >
        <button
          type="submit"
          style={{
            padding: ".3rem",
            width: "6rem",
            borderRadius: "1rem",
            backgroundColor: "black",
            color: "white",
            cursor: "pointer",
          }}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add User
        </button>
      </div>
      <div style={{ display: "flex", marginLeft: "11.5rem" }} className="row">
        {list?.map((itm) => (
          <div className="col-md-4" style={{ marginTop: "1rem" }}>
            <div
              class="card"
              style={{ width: "14.1rem", border: "1px solid black" }}
            >
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyYuVsyAh_BIt_gT6a-dYbOVa9RztXdsrOZA&usqp=CAU"
                  class="card-img-top"
                  alt="..."
                  style={{ width: "5rem" }}
                />
                <span style={{ marginLeft: "5rem", cursor: "pointer" }}  onClick={() => {
            deleteUser();
          }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-archive-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z" />
                  </svg>
                </span>
                <span style={{ marginLeft: "1rem", cursor: "pointer" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-pen-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z" />
                  </svg>
                </span>
              </div>

              <div class="card-body">
                <div>
                  <b>Name: </b>
                  {itm.name}
                </div>
                <div>
                  <b>Phone No: </b>
                  {itm.phoneNumber}
                </div>
                <div>
                  <b>Address: </b> {itm.address}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                ADD USER
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label class="form-label">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    aria-describedby="emailHelp"
                    onChange={(e) => {
                      setData({ ...data, name: e.target.value });
                    }}
                  />
                </div>
                <div>
                  {errors.name ? (
                    <span style={{ color: "red" }}>{errors.name}</span>
                  ) : null}
                </div>
                <div class="mb-3">
                  <label class="form-label">Address</label>
                  <input
                    type="text"
                    class="form-control"
                    onChange={(e) => {
                      setData({ ...data, address: e.target.value });
                    }}
                  />
                </div>
                <div>
                  {errors.address ? (
                    <span style={{ color: "red" }}>{errors.address}</span>
                  ) : null}
                </div>
                <div class="mb-3">
                  <label class="form-label">Phone number</label>
                  <input
                    type="tel"
                    class="form-control"
                    onChange={(e) => {
                      setData({ ...data, phoneNumber: e.target.value });
                    }}
                  />
                </div>
                <div>
                  {errors.phoneNumber ? (
                    <span style={{ color: "red" }}>{errors.phoneNumber}</span>
                  ) : null}
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                data-bs-dismiss="modal"
                style={{ backgroundColor: "black", color: "white" }}
                onClick={() => {
                  if (validate()) {
                    // localStorage.setItem()
                    let l = null;
                    if (localStorage.getItem("list")) {
                      l = JSON.parse(localStorage.getItem("list"));
                      l.push(data);
                      localStorage.setItem("list", JSON.stringify(l));
                    } else {
                      l = [];
                      l.push(data);
                      localStorage.setItem("list", JSON.stringify(l));
                    }
                    // console.log(data, l)
                    setlist(JSON.parse(localStorage.getItem("list")));
                    navigate("/dashboard");
                  }
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
      >
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#">
                Previous
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
