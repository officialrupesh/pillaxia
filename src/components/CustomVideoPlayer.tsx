import React, { useRef, useEffect, useState } from "react";
import { ExitFullScreenIcon, FullScreenIcon, MutedIcon, PauseIcon, PlayIcon, SoundIcon } from "../../public/images/icons/Icons";

const VideoPlayer: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [isVideoStill, setIsVideoStill] = useState(true);
    const [isVideoMuted, setIsVideoMuted] = useState(false);
    const [isFullscreenEnabled, setIsFullScreenEnabled] = useState(false);

    useEffect(() => {
        const handleFullscreenChange = () => {
            if (containerRef.current) {
                containerRef.current.setAttribute(
                    "data-fullscreen",
                    document.fullscreenElement ? "true" : "false"
                );
            }
        };

        const handleVideoEnd = () => {
            setIsVideoStill(true);
        };

        if (videoRef.current) {
            videoRef.current.addEventListener("ended", handleVideoEnd);
        }

        document.addEventListener("fullscreenchange", handleFullscreenChange);

        return () => {
            document.removeEventListener("fullscreenchange", handleFullscreenChange);

            if (videoRef.current) {
                videoRef.current.removeEventListener("ended", handleVideoEnd);
            }
        };
    }, []);

    const togglePlayPause = () => {
        if (videoRef.current) {
            if (videoRef.current.paused || videoRef.current.ended) {
                videoRef.current.play();
                setIsVideoStill(false);
            } else {
                videoRef.current.pause();
                setIsVideoStill(true);
            }
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsVideoMuted(!isVideoMuted);
        }
    };

    const handleFullscreen = () => {
        if (containerRef.current) {
            if (document.fullscreenElement) {
                document.exitFullscreen();
                setIsFullScreenEnabled(false);
            } else {
                containerRef.current.requestFullscreen();
                setIsFullScreenEnabled(true);
            }
        }
    };

    return (
        <div ref={containerRef} id="videoContainer">
            <video
                ref={videoRef}
                id="video"
                controls={false}
                src="/images/video.mp4"
            />
            {isVideoStill && (
                <div className="main-play-btn">
                    <button onClick={togglePlayPause}><PlayIcon /></button>
                </div>
            )}
            <div>
                <div className="video-controls d-flex justify-content-between">
                <div className="video-controls-left d-flex align-items-start">
                    <button onClick={togglePlayPause} type="button">
                        {isVideoStill ? <PlayIcon /> : <PauseIcon />}
                    </button>
                    <button onClick={toggleMute} type="button">
                        {isVideoMuted ? <MutedIcon /> : <SoundIcon />}
                    </button>
                </div>
                    <div className='video-controls-right'>
                    <button name={`${isFullscreenEnabled ? 'Exit Full Screen':'Enter Full Screen'}`} onClick={handleFullscreen} type="button">
                        {isFullscreenEnabled ? <ExitFullScreenIcon /> : <FullScreenIcon />}
                    </button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default VideoPlayer;
