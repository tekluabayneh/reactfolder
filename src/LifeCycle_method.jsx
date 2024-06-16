import React from "react";

class DataFetcherlifecyclemethod extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.url !== prevProps.url) {
      this.fetchData();
    }
  }

  componentWillUnmount() {
    if (this.abortController) {
      this.abortController.abort();
    }
  }

  fetchData() {
    this.setState({ loading: true, error: null });
    this.abortController = new AbortController();

    fetch(this.props.url, { signal: this.abortController.signal })
      .then((response) => response.json())
      .then((data) => this.setState({ data, loading: false }))
      .catch((error) => {
        if (error.name !== "AbortError") {
          this.setState({ error, loading: false });
        }
      });
  }

  render() {
    const { data, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return (
      <div>
        <h1>Fetched Data:</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  }
}

export default DataFetcherlifecyclemethod;
