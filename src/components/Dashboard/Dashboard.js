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
  const [list, setlist] = useState([])

  useEffect(() => {
    if(localStorage.getItem('list')){
      setlist(localStorage.getItem('list'));
    }
  }, [])
  

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
        <div className="col-md-4">
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
              <span style={{ marginLeft: "6.9rem", marginTop: "0.5rem" }}>
                <img
                  src="https://tse3.mm.bing.net/th?id=OIP.etkSPgPxE8JWuqIdxrRi9AHaHa&pid=Api&P=0&h=180"
                  style={{
                    wiodth: "1rem",
                    height: "1.1rem",
                    cursor: "pointer",
                  }}
                //   data-bs-toggle="modal"
                //   data-bs-target="#exampleModal11"
                ></img>
              </span>
            </div>

{/* <div  class="modal fade"
        id="exampleModal11"
        tabindex="-1"
        aria-labelledby="exampleModalLabel1"
        aria-hidden="true">
 hello</div> */}

            <div class="card-body">
              <div>
                <b>Name: </b>Ayushi
              </div>
              <div>
                <b>Phone No: </b>8745677867
              </div>
              <div>
                <b>Address: </b> Noida
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
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
              <span style={{ marginLeft: "6.9rem", marginTop: "0.5rem" }}>
                <img
                  src="https://tse3.mm.bing.net/th?id=OIP.etkSPgPxE8JWuqIdxrRi9AHaHa&pid=Api&P=0&h=180"
                  style={{
                    wiodth: "1rem",
                    height: "1.1rem",
                    cursor: "pointer",
                  }}
                ></img>
              </span>
            </div>

            <div class="card-body">
              <div>
                <b>Name: </b>Ayushi
              </div>
              <div>
                <b>Phone No: </b>8745677867
              </div>
              <div>
                <b>Address: </b> Noida
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
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
              <span style={{ marginLeft: "6.9rem", marginTop: "0.5rem" }}>
                <img
                  src="https://tse3.mm.bing.net/th?id=OIP.etkSPgPxE8JWuqIdxrRi9AHaHa&pid=Api&P=0&h=180"
                  style={{
                    wiodth: "1rem",
                    height: "1.1rem",
                    cursor: "pointer",
                  }}
                ></img>
              </span>
            </div>
            <div class="card-body">
              <div>
                <b>Name: </b>Ayushi
              </div>
              <div>
                <b>Phone No: </b>8745677867
              </div>
              <div>
                <b>Address: </b> Noida
              </div>
            </div>
          </div>
        </div>
      </div>
      <i class="bi bi-three-dots-vertical"></i>
      {/* next row */}
      <div
        style={{ display: "flex", marginLeft: "11.5rem", marginTop: "1rem" }}
        className="row"
      >
        <div className="col-md-4">
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
            </div>

            <div class="card-body">
              <div>
                <b>Name: </b>Ayushi
              </div>
              <div>
                <b>Phone No: </b>8745677867
              </div>
              <div>
                <b>Address: </b> Noida
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
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
            </div>
            <div class="card-body">
              <div>
                <b>Name: </b>Ayushi
              </div>
              <div>
                <b>Phone No: </b>8745677867
              </div>
              <div>
                <b>Address: </b> Noida
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
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
            </div>
            <div class="card-body">
              <div>
                <b>Name: </b>Ayushi
              </div>
              <div>
                <b>Phone No: </b>8745677867
              </div>
              <div>
                <b>Address: </b> Noida
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* next row */}
      <div
        style={{ display: "flex", marginLeft: "11.5rem", marginTop: "1rem" }}
        className="row"
      >
        <div className="col-md-4">
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
            </div>

            <div class="card-body">
              <div>
                <b>Name: </b>Ayushi
              </div>
              <div>
                <b>Phone No: </b>8745677867
              </div>
              <div>
                <b>Address: </b> Noida
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
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
            </div>
            <div class="card-body">
              <div>
                <b>Name: </b>Ayushi
              </div>
              <div>
                <b>Phone No: </b>8745677867
              </div>
              <div>
                <b>Address: </b> Noida
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
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
            </div>
            <div class="card-body">
              <div>
                <b>Name: </b>Ayushi
              </div>
              <div>
                <b>Phone No: </b>8745677867
              </div>
              <div>
                <b>Address: </b> Noida
              </div>
            </div>
          </div>
        </div>
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
                style={{ backgroundColor: "black", color: "white" }}
                onClick={() => {
                  if (validate()) {
                    // localStorage.setItem()
                    if(localStorage.getItem('list')){
                      let l = localStorage.getItem('list');
                      l.push(data);
                      localStorage.setItem('list',l);
                    } else {
                      let l = [];
                      l.push(data);
                      localStorage.setItem('list',l);
                    }
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
      <div style={{display:"flex",justifyContent:"center",marginTop:"1rem"}}>
      <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
</div>
    </>
  );
}