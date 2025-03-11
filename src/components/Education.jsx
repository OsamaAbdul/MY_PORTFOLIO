export default function Education(props) {
  const { education } = props;

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-center align-items-center min-vh-50">
        <div className="col-sm-8">
          <center>
            <h1>Edu<span>cation</span></h1>
          </center>
          <div className="about p-3">
            <div className="card-body">
              <div className="row">
                {education.map((edu, index) => (
                  <div key={index} className="col-md-12">
                    <div className="card bg-black text-white mb-1"> {/* Changed from mb-3 to mb-1 */}
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-6">
                            <h2>{edu.type}</h2>
                            <ul>
                              <li>{edu.institution}</li>
                              <li>{edu.course}</li>
                            </ul>
                            <p>{edu.cgpa}</p>
                          </div>
                          <div className="col-md-6 text-right">
                            <p>{edu.year}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}