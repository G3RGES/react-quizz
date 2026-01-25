function Error({ message }) {
  return (
    <p className="error">
      <span>💥</span> There was an error, {message}
    </p>
  );
}

export default Error;
