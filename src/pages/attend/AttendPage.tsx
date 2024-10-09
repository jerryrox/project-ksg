import "react";
import { useParams } from "react-router-dom";

export function AttendPage() {
    const {
        id: attendId,
    } = useParams();

    return (
        <p>Test: {attendId}</p>
    );
}