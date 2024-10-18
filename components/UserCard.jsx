export function UserCard({ user }) {

  return (
    <>
      {
        user.map(({ name, email, phone,
          address: { street, suite, city, zipcode },
          company: { name: cName, catchPhrase } }, index) => (
          <div key={index}>
            <div className="user-card">
              <h2>{name}</h2>
              <fieldset>
                <legend>Information:</legend>
                <div><span>Email:</span> {email}</div>
                <div><span>Phone:</span>: {phone}</div>
                <div title={zipcode}><span>Address:</span>: {street} / {suite} / {city}</div>
                <hr />
                <div className="cName">Company: {cName} - ".......{catchPhrase}......."</div>
              </fieldset>
            </div>
          </div>
        ))
      }
    </>
  );
}