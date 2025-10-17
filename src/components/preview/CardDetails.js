"use client"
import { base_url } from "@/server";
import axios from "axios";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";
import ThemeEight from "./theme_eight";
import Themeseven from "./theme_seven";
import ThemeNine from "./theme_nine";
import ThemeTen from "./theme_ten";
import ThemeElven from '@/components/preview/theme_eleven'
import ThemeTwelve from "./theme_twelve";
import Themeonepage from "./theme_one";
import Themetwopage from "./theme_two";
import ThemeThreepage from "./theme_three";
import ThemeFourpage from "./theme_four";
import ThemeFivepage from "./theme_five";
import ThemeSixpage from "./theme_six";
import Thirteenpagemain from "./theme_thirteen";
import Fourteenpage from "./theme_fourteen";
import Fifteenpage from "./theme_fifteen";
import Sixteenpage from "./theme_sixteen";



const CardDetails = () => {
    const params = useParams()
    const [dataDetails, setDetailsdata] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const cardDetailsget = async (slug) => {
        // setLoading(true);
        try {
            let res;
            const token = window.localStorage.getItem("token");

            if (slug === "demo") {
                res = await axios.get(`${base_url}card/demo`);
            } else {
                res = await axios.get(`${base_url}card/details/${slug}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
            }

            const data = res?.data?.data;

            if (data?.length > 0) {
                setDetailsdata(data[0]);
                setError(false);
            } else {
                setError(true);
            }
        } catch (err) {
            setError(true);
            // optional: console.error(err);
        } finally {
            // setLoading(false);
        }
    };

    useEffect(() => {
        if (params?.slug) {
            cardDetailsget(params.slug);
        }
    }, [params?.slug]);

    return (
        <>
            {dataDetails?.theme_name === "theme_one" && <Themeonepage dataDetailsData={dataDetails} />}
            {dataDetails?.theme_name === "theme_two" && <Themetwopage dataDetailsData={dataDetails} />}
            {dataDetails?.theme_name === "theme_three" && <ThemeThreepage dataDetailsData={dataDetails} />}
            {dataDetails?.theme_name === "theme_four" && <ThemeFourpage dataDetailsData={dataDetails} />}
            {dataDetails?.theme_name === "theme_five" && <ThemeFivepage dataDetailsData={dataDetails} />}
            {dataDetails?.theme_name === "theme_six" && <ThemeSixpage dataDetailsData={dataDetails} />}

            {dataDetails?.theme_name === "theme_seven" && <Themeseven dataDetailsData={dataDetails} />}
            {dataDetails?.theme_name === "theme_eight" && <ThemeEight dataDetailsData={dataDetails} />}
            {dataDetails?.theme_name === "theme_nine" && <ThemeNine dataDetailsData={dataDetails} />}
            {dataDetails?.theme_name === "theme_ten" && <ThemeTen dataDetailsData={dataDetails} />}
            {dataDetails?.theme_name === "theme_eleven" && <ThemeElven dataDetailsData={dataDetails} />}
            {dataDetails?.theme_name === "theme_twelve" && <ThemeTwelve dataDetailsData={dataDetails} />}

            {dataDetails?.theme_name === "theme_nine" && <Thirteenpagemain dataDetailsData={dataDetails} />}
            {dataDetails?.theme_name === "theme_ten" && <Fourteenpage dataDetailsData={dataDetails} />}
            {dataDetails?.theme_name === "theme_eleven" && <Fifteenpage dataDetailsData={dataDetails} />}
            {dataDetails?.theme_name === "theme_twelve" && <Sixteenpage dataDetailsData={dataDetails} />}
        </>
    )
}

export default CardDetails