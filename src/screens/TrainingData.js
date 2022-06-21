import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Toast from "../components/LoadingError/Toast";
import Message from "../components/LoadingError/Error";
import Loading from "../components/LoadingError/Loading";
import axios from "axios";
import DataTable from "react-data-table-component";
import { listTraingData } from "../Redux/Actions/TrainingDataActions";
const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};
const TrainingData = () => {
  const dispatch = useDispatch();
  //datatable
  const [search, setSearch] = useState("");

  const [trainingData, setTrainingData] = useState([]);

  const [filteredTrainingData, setFilteredTrainingData] = useState([]);

  //get training data list
  const trainingDataList = useSelector((state) => state.trainingDataList);

  const { error, loading, trainingData: trainData } = trainingDataList;

  useEffect(() => {
    getTrainingData();
  });

  useEffect(() => {
    dispatch(listTraingData());
  }, [dispatch]);

  const getTrainingData = () => {
    try {
      const response = trainData;

      // console.log(response.data);

      setTrainingData(response.data);

      setFilteredTrainingData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {

  // }, []);

  useEffect(() => {
    const result = trainingData.filter((trnData) => {
      console.log(trnData.comment);
      console.log(JSON.stringify(trnData.comment));
      return trnData.comment.toLowerCase().match(search.toLowerCase());
    });

    setFilteredTrainingData(result);
  }, [search]);

  //Selected rows
  const [selectedData, setSelectedData] = useState();

  const handleChange = (state) => {
    setSelectedData(state.selectedRows);
    console.log(selectedData);
  };

  const columns = [
    {
      name: "Select Record",
      width: "150px",
      selector: (row) => row.is_positive,
    },
    {
      name: "Comment",
      width: "650px",
      selector: (row) => row.comment,
      sortable: true,
    },
    {
      name: "Action",
      width: "150px",
      cell: (row) => (
        <button
          className="btn btn-danger"
          onClick={() => alert(row.comment_id)}
        >
          Delete
        </button>
      ),
    },
  ];

  return (
    <>
      <Header />
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Training Data</h1>
              </div>
              {/* /.col */}

              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <i className="nav-icon fa fa-tachometer-alt text-aqua" />
                    <a href="#"> Home </a>
                  </li>

                  {/* <li className="breadcrumb-item active">Customers</li> */}
                  <li className="breadcrumb-item active">Training Data List</li>
                </ol>
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>
        <Toast />
        <section className="content">
          <div className="container-fluid">
            {loading ? (
              <Loading />
            ) : error ? (
              <Message variant="alert-danger">{error}</Message>
            ) : (
              <>
                <DataTable
                  highlightOnHover
                  selectableRowsHighlight
                  selectableRows
                  onSelectedRowsChange={handleChange}
                  fixedHeader
                  fixedHeaderScrollHeight="450px"
                  // title="Trainig Data List"
                  columns={columns}
                  data={filteredTrainingData}
                  pagination
                  subHeader
                  subHeaderAlign="left"
                  // subHeaderComponent={
                  //   <input
                  //     className="w-25 form-control"
                  //     type="text"
                  //     value={search}
                  //     onChange={(e) => setSearch(e.target.value)}
                  //     placeholder="Search here"
                  //   ></input>
                  // }
                  // actions={<button className="btn btn-sm btn-info">Export</button>}
                />
              </>
            )}
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
      {/* /.content-wrapper */}
      <SideNav />
      <Footer />
    </>
  );
};

export default TrainingData;
