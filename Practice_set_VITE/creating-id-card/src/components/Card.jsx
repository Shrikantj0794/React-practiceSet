function Card({url, first_name, phone_no}){
    return<>
        <div class="id-card">
        <div class="profile-picture">
        </div>
        <div class="details">
            <h2>{first_name}</h2>
            <p><strong>Phone:</strong>{phone_no}</p>
        </div>
        </div>
    </>
}

export default Card