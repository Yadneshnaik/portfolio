import React from "react";

const FreeTimeSection = () => {
    return (
        <div
            style={{
                backgroundColor: "whitesmoke",
                borderRadius: "0px",
                boxShadow: "rgb(239, 45, 86) 0px 0px 1px -1px",
                color: "black",
                padding: "60px 20px",
            }}
        >
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-8 col-12">
                        <h1 className="lg" style={{ marginBottom: "20px" }}>
                            In My Free Time...
                        </h1>
                        <p className="lead">
                            In my free time, I enjoy Listing to music. I have a wide range of music taste, from my favorite Playlists.
                        </p>
                        <div className="row" style={{ height: "25px" }}></div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div
                                style={{
                                    maxWidth: "300px",
                                    margin: "auto",
                                    borderRadius: "12px",
                                }}
                            >
                                <iframe
                                    title="Spotify Embed 1"
                                    src="https://open.spotify.com/embed/album/0YE2mX6UnATaDrybxJHsPP?utm_source=generator"
                                    width="100%"
                                    height="152"
                                    frameBorder="0"
                                    allowfullscreen=""
                                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                    loading="lazy"
                                    style={{ borderRadius: "12px" }}
                                ></iframe>
                            </div>
                        </div>
                        <div className="row" style={{ height: "25px" }}></div>
                        <div className="row">
                            <div
                                style={{
                                    maxWidth: "300px",
                                    margin: "auto",
                                    borderRadius: "12px",
                                }}
                            >
                                <iframe
                                    title="Spotify Embed 2"
                                    src="https://open.spotify.com/embed/album/0fOfkpRk6bPriGxoZe2qBB?utm_source=generator"
                                    width="100%"
                                    height="152"
                                    frameBorder="0"
                                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                    loading="lazy"
                                    style={{ borderRadius: "12px" }}
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FreeTimeSection;
