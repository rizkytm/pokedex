function Home() {
  return (
    <>
      <input
        type="text"
        id="myInput"
        style={{ borderRadius: '10px' }}
        placeholder="Search for names.."
      />
      <div className="card" style={{ borderRadius: '10px' }}>
        <div className="card-body d-flex">
          <img
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png"
            alt="Bulbasaur"
            style={{
              maxHeight: '50px'
            }}
          />
          <div className="mx-2">
            <h6>
              <b>Bulbasaur</b>
            </h6>
            <span
              style={{
                border: '1px solid grey',
                borderRadius: '10px',
                padding: '4px',
                fontSize: '12px'
              }}
            >
              Grass
            </span>
          </div>
        </div>
      </div>
      <br />
      <div className="card" style={{ borderRadius: '10px' }}>
        <div className="card-body">
          <div className="d-flex justify-content-center">
            <img
              src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png"
              alt="Bulbasaur"
              style={{
                maxWidth: '150px'
              }}
            />
          </div>
          <div className="mx-2">
            <h5>
              <b>Bulbasaur</b>
            </h5>
            <span
              style={{
                border: '1px solid grey',
                borderRadius: '10px',
                padding: '4px'
              }}
            >
              Grass
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
