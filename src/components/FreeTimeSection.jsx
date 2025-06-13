import React from "react";

const FreeTimeSection = () => {
  return (
    <section>
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="fw-bold mb-3">In My Free Time...</h2>
            <p className="lead">
              I enjoy listening to music, exploring new playlists, and discovering different genres.
              Music helps me relax and unwind after a long day. It fuels creativity and sets the tone
              for my development sessions.
            </p>
          </div>

          <div className="col-md-6">
            <div className="d-flex flex-column gap-4 align-items-center">
              <iframe
                title="Spotify Playlist 1"
                src="https://open.spotify.com/embed/album/7Ej3CO7qrOBPXGvXZA10Fl?utm_source=generator"
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                style={{ borderRadius: "12px", maxWidth: "100%" }}
              ></iframe>

              <iframe
                title="Spotify Playlist 2"
                src="https://open.spotify.com/embed/album/1xXv2wox60JAkIKUl8QwWp?utm_source=generator"
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                style={{ borderRadius: "12px", maxWidth: "100%" }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeTimeSection;
