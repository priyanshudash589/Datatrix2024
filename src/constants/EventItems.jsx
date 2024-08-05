
function EventItems() {
  return (
    <a href="#">
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="ui/ux review check"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">UI/UX Review Check</h2>
          <p className="mt-3 font-normal">
            Because it&apos;s about motivating the doers. Because I&apos;m here to
            follow my dreams and inspire others.
          </p>
          <div className="card-actions justify-between">
            <span className="font-normal">January 10</span>
          </div>
        </div>
      </div>
    </a>
  );
}

export default EventItems;