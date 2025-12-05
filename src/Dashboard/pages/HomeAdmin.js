import React from 'react';
import ProductosCards from "../../Dashboard/components/ProductoCards";

function HomeAdmin() {
  return (
    <div className="content-wrapper">
      {/* Content Header */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Dashboard</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active">Dashboard v1</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <section className="content">
        <div className="container-fluid">
          {/* Small boxes (Stat box) */}
          <div className="row">
            <div className="col-lg-3 col-6">
              <div className="small-box bg-info">
                <div className="inner">
                  <h3>150</h3>
                  <p>New Orders</p>
                </div>
                <div className="icon"><i className="ion ion-bag" /></div>
                <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
              </div>
            </div>
            {/* Agrega los otros boxes igual que antes */}
          </div>

          {/* Sección Productos */}
          <div className="row mt-4">
            <div className="col-12">
              <h3>Productos Registrados</h3>
              <ProductosCards />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default HomeAdmin;
  