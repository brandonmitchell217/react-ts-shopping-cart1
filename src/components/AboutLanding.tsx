export function AboutLanding() {
  return (
    <main className="mb-5" style={{ position: "relative", height: "100vh" }}>
      <div
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          top: "0",
          left: "0",
          zIndex: "1",
          backgroundColor: "rgba(0,0,0,0.4)",
        }}
      ></div>
      <div
        className="landing-bg d-flex align-items-end justify-content-end pb-5"
        style={{
          height: "100%",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1496886077455-6e206da90837?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)",
        }}
      >
        <div
          className="w-50 py-4 px-5 d-flex flex-column align-items-end text"
          style={{
            position: "relative",
            zIndex: "2",
            textShadow: "1px 2px 8px rgba(0,0,0,0.7)",
          }}
        >
          <h1
            className="w-100 px-3 text-left"
            style={{ fontSize: "4rem", borderBottom: "6px solid #fff" }}
          >
            About Us
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            temporibus unde architecto velit iusto dolores. Expedita itaque
            accusamus minima? Consequatur assumenda nisi necessitatibus
            asperiores illo eligendi, ex molestias. Repellendus, saepe dolorem!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nisi
            cupiditate eaque ex sed sunt magnam commodi qui, doloremque, facere,
            fugit deleniti error dignissimos.
          </p>
        </div>
      </div>
    </main>
  );
}
