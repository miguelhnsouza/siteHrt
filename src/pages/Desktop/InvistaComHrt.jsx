import "bootstrap/dist/css/bootstrap.min.css";

export default function InvistaComHrt() {
    const secondaryColor = "#cdbba3";
    const primaryColor = "#001e3e";
  return (
    <section
      style={{ height: "60vh" }}
      className="d-flex align-items-center justify-content-center"
    >
      <div className="row w-50 h-75 d-flex flex-row rounded-5">
        <div
          className="row w-100 h-75 m-0 p-0 position-relative"
          style={{
            borderTopLeftRadius: "5rem",
            borderTopRightRadius: "5rem",
            borderBottomLeftRadius: "5rem",
            borderBottomRightRadius: 0,
            backgroundColor: "#cdbba3",
          }}
        >
          <div
            className="w-75 h-100 text-white"
            style={{
              borderTopLeftRadius: 0,
              borderTopRightRadius: "5rem",
              borderBottomRightRadius: "5rem",
              borderBottomLeftRadius: "5rem",
              backgroundColor: "#001e3e",
              fontFamily: "Amandine, serif",
              fontSize: "3.5rem",
              fontWeight: 600,
              lineHeight: 1.2,
              textAlign: "start",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Invista em projetos <br />
            <span style={{ fontWeight: 300 }}>
              que vão te entregar <br />
              valorização total!
              <br />
            </span>
          </div>
          <div
            className="w-25 h-100 text-white d-flex flex-column justify-content-center align-items-start p-4"
            style={{
              fontFamily: "Livvic, serif",
              fontSize: "1rem",
              fontWeight: 300,
              lineHeight: 1.2,
              textAlign: "start",
            }}
          >
            Investir com a HRT é participar de algo maior.
            <br />
            <br />
            Se você busca investir em um projeto com potencial real de
            valorização e segurança, a HRT é o caminho.
            <button className="mt-4 px-3 py-1 rounded-5 border-0 text-white" style={{backgroundColor: "#001e3e"}}>Invista com HRT</button>
          </div>
        </div>
        <div className="w-100 d-flex flex-row justify-content-center align-items-start p-4 gap-5 fs-4">
          <p>Corretores<span className="rounded-circle text-dark d-inline-flex align-items-center justify-content-center ms-2" style={{width: '20px', height: '20px', fontSize: '12px', backgroundColor: secondaryColor}}>→</span></p>
          <p>Terrenistas<span className="rounded-circle text-dark d-inline-flex align-items-center justify-content-center ms-2" style={{width: '20px', height: '20px', fontSize: '12px', backgroundColor: secondaryColor}}>→</span></p>
          <p>Imobiliárias <span className="rounded-circle text-dark d-inline-flex align-items-center justify-content-center ms-2" style={{width: '20px', height: '20px', fontSize: '12px', backgroundColor: secondaryColor}}>→</span></p>
        </div>
      </div>
    </section>
  );
}
