"use client";

export default function GlobalError({ error, reset }: any) {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				height: "100vh",
				textAlign: "center",
				backgroundColor: "#f8f8f8",
				color: "#333",
			}}>
			<h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
				Something went wrong!
			</h1>
			<p style={{ marginBottom: "2rem" }}>{error.message}</p>
			<button
				onClick={() => reset()}
				style={{
					padding: "0.75rem 1.5rem",
					backgroundColor: "#0070f3",
					color: "#fff",
					border: "none",
					borderRadius: "5px",
					cursor: "pointer",
				}}>
				Try Again
			</button>
		</div>
	);
}
