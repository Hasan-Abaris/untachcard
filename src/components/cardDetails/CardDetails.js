"use client"
import { base_url } from '@/server'
import axios from 'axios'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Image from "next/image"

const CardDetails = ({ overlayGradient }) => {
    const params = useParams()
    const [dataDetails, setDetailsdata] = useState(null)
    console.log(dataDetails);


    const cardDetailsget = async () => {
        try {
            const token = window.localStorage.getItem("token")
            const res = await axios.get(`${base_url}card/details/${params?.id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setTimeout(() => {
                setDetailsdata(res?.data?.data[0])
            }, 1000)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        if (params?.id) {
            cardDetailsget()
        }
    }, [params])

    if (!dataDetails) {
        return <p style={{ textAlign: "center", padding: "20px" }}>Loading...</p>
    }

    // parse social links JSON
    let socialOptions = {}
    try {
        socialOptions = JSON.parse(dataDetails?.social_options || "{}")
    } catch (e) {
        socialOptions = {}
    }

    const cardStyle = {
        backgroundColor: dataDetails?.card_bg_type === "Transparent" ? "transparent" : dataDetails?.card_bg,
        width: "320px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        position: "relative",
        overflow: "hidden",
        padding: "20px",
        color: dataDetails?.card_font_color || "#fff",
        fontFamily: dataDetails?.card_font || "sans-serif"
    };

    const linkStyle = {
        color: dataDetails?.card_font_color || "#fff",
        textDecoration: "none",
        display: "block",
    };



    const backgroundImagePath = `/assets/assets/uploads/card-bg/${dataDetails?.card_theme_bg}`
    return (
        <div
            style={{
                position: "relative",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
                backgroundImage: `url(${backgroundImagePath})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div style={cardStyle}>

                {/* Overlay gradient */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: overlayGradient,
                        zIndex: 0,
                        opacity: 0.5,
                    }}
                />

                <div
                    style={{
                        position: "relative",
                        zIndex: 1,
                        textAlign: "center",
                    }}
                >
                    {/* Profile Image */}

                    {dataDetails?.profile && (
                        <img
                            src={`/assets/assets/uploads/card-profile/${dataDetails.profile}`}
                            // onError={(e) => {

                            //     e.target.src = `${base_url}uploads/${dataDetails.profile}`;
                            // }}
                            alt={dataDetails.title}
                            width={100}
                            height={100}
                            style={{
                                borderRadius: "50%",
                                marginBottom: "15px",
                                border: "4px solid #fff",
                                objectFit: "cover",
                            }}
                        />
                    )}

                    {/* Title / Subtitle */}
                    <h2 style={{ marginBottom: "5px", fontSize: "1.5rem" }}>
                        {dataDetails?.title}
                    </h2>
                    <p style={{ marginBottom: "15px", fontSize: "1.1rem", opacity: 0.8 }}>
                        {dataDetails?.sub_title}
                    </p>
                    <p style={{ marginBottom: "20px", fontSize: "0.9rem", opacity: 0.7 }}>
                        {dataDetails?.description}
                    </p>

                    {/* Social & Contact Links */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        {socialOptions?.mandatory?.mobile && (
                            <a href={`tel:${socialOptions.mandatory.mobile}`} style={linkStyle}>
                                ☎ {socialOptions.mandatory.mobile}
                            </a>
                        )}
                        {dataDetails?.enquery_email && (
                            <a href={`mailto:${dataDetails?.enquery_email}`} style={linkStyle}>
                                ✉ {dataDetails.enquery_email}
                            </a>
                        )}
                        {socialOptions?.mandatory?.website && (
                            <a href={socialOptions.mandatory.website} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                                🌐 {socialOptions.mandatory.website}
                            </a>
                        )}
                        {socialOptions?.mandatory?.address && (
                            <a href={socialOptions.mandatory.address_url} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                                📍 {socialOptions.mandatory.address}
                            </a>
                        )}
                        {socialOptions?.optional?.url?.map((u, i) => (
                            <a key={i} href={u} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                                {socialOptions?.optional?.icon?.[i] ? (
                                    <i className={socialOptions.optional.icon[i]} style={{ marginRight: "8px" }}></i>
                                ) : "🔗"}
                                {socialOptions?.optional?.text?.[i]}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDetails
