export class SeriesService {
  static async getShows(name: string): Promise<any[]> {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${name}`);
    const json = await response.json();

    return json;
  }

  static async getShow(id: string): Promise<any> {
    const response = await fetch(`https://api.tvmaze.com/shows/${id}?embed=episodes`);
    const json = await response.json();

    return json;
  }
}

export default SeriesService;
