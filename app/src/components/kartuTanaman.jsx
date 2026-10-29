export default function kartuTanaman({ judul, kategori }) {
    return (
        <div className="kartu-tanaman">
            <h3>{judul}</h3>
            <p>Kategori: {kategori}</p>
        </div>
    )
}