export const dynamic = "force-dynamic";

const brands = [
  {
    name: "Poly Medicure",
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAQlBMVEVHcEz/ywgLlJwMk5sMk5sMk5sMk5sJkKD/ywgMk5sLk5sMk5sMk5vvnRcMk5sMk5vsGyPtHCTtHCTtHCTtHCTtHCR5QvU/AAAAFnRSTlMA8HHv065cB/9//4YPE5cylJ3/9sd0tOP0/QAAAIxJREFUeAGl0EUCwzAQQ1GFzez7X7Vjl9tw/vatJOypKYFqu64fxukbGQWKi5pcQ9GpZSSdVlAMayjUH8o3thhFRwldAjUppSZZ0RDWvodxURp2Ib5qH2jbmqM8qNFQ/fdLofQzxT4x/mOPFbQr2GIZR8ygLNIZhTmkaaMF9Yf/XceolzFhseCxXMbRbu7CDXtMavABAAAAAElFTkSuQmCC",
  },
  {
    name: "Fischer Medical",
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAARVBMVEVHcEw5Xf88bv88bv88bv88bv88bv84V/88bv88bv88bv88bv9Z/81Z/81Y/89Y/89c/8dY/89Z/85Y/89Z/85Y/89Y/88GANxjAAAAF3RSTlMACZLw/7/WLnGbb3VIVf/NFaVbuGD6h+X/R/wAAAChSURBVHgBxM9VAoNADEXRh3tw9r/UYskw/tm06LkY/jBJxNMsCXueB4vTvYV4nhcRL1FFvM6boLfnugl4d28br6PMpXC6uxDvP0Xi8IFGKapptnwh4uJ0otXwjYiL4vK3EMdMqjj9LZTrxUr3zBD3FOD3mz0F+PvIU4BdL/aDC4gTHao447eA8n0CF6dzAcvPQvws8HXnxBzrfM064TeaAQDOIQ7jXENS2wAAAABJRU5ErkJggg==",
  },
  {
    name: "Laxmi Dental",
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAASFBMVEVHcEzkHCLjHiTjHiS9WVuIioqJiYmJiYnkHSO2YWOJiYmJiYmZdHXiISaJiYnkHSOJiYnjHiSJiYmJiYnZKzCJiYnlGyGtamvjiTIkAAAAGHRSTlMAImhRV1xMKf///6wQnJyS7fnbxwWCYF8O97D9AAAAfUlEQVR4AdXQxQEAIRAEwcFhzz3/TM/d+NLfQhchxjggpFJKmztyC1hHU1H8hElsjNEpkXnADFNxPuojjlH+gZr0FYsNQekHltUZaxSJH1J6R8ZY/PSgEe0Qf/xKDTHGxhtvQ4jrOdMQaVxwbhx+Zc5WM855O9bpGNdqBFEP8S0GPil95TMAAAAASUVORK5CYII=",
    displayName: "Laxmi Dental",
  },
  {
    name: "Tarsons Products",
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAkFBMVEVHcEyCx+ji7/Di7/HL4uqQudR+p8f9/v673Oju+fd+qsyBnryatMpyqdClzuKGvt2awdlpn8iAxOWDutl3pspukLaazegAfcYAf8kAdsU/reADcL4DarlduOUsaKgnebyFyOsOl9YIic2z3/YooNtZl8ib0vD5/f/d8fpvvedHj8VHd6sAXapfibbJ6fdYsN7aj5s4AAAAF3RSTlMApD8pTabMEVsxwL6W5Hyuhe7UysTn26zcUHQAAAETSURBVCiRjdLpcoMgFAVg3HBLYraWRRBR4hLb5P3frmCTKYky0/PTD+5REIB/xfNipx3Hmro4pn3fuzjh/TAMt5EWK+x1w61tu66m12jBvNVU1yPnVL5zQFsjd6qUlBJNiY072vmhTvJIYOOJfzo/Etz5MSqKDMYggFmWnTeW+YpT1SByASBihBAWWbhXlDYIkzMAW4IQZqGFW6kajFG5A/EV6XzblRfZYL1BpCAstZXQsrCRZv1cqRF/7S2MzD6N8FFZpRYeZnNVolmflSy3MSvxS+XLyQIo9ENy8tODqZze7iyFgmEhBDHVH4vTTWHFsJmO2WaBmvOK6TfDlb+Cv4zRtGo6QV5Va1Of/DfU/ZMb/AH3hxw4s3sVpwAAAABJRU5ErkJggg==",
    displayName: "Tarsons Products",
  },
  {
    name: "Nureca Ltd",
    logo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3NzE3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIABwAHAMBEQACEQEDEQH/xAAZAAADAQEBAAAAAAAAAAAAAAAEBQYHAwD/xAAqEAABAwIEBgEFAQAAAAAAAAABAgMRBBIABhMhBRQiMUFxgSMyUVJhFf/EABoBAAIDAQEAAAAAAAAAAAAAAAIDAQQFAAb/xAArEQABAwIDBwMFAAAAAAAAAAABAAIRAyESMUEEE1FhcYGhIpHwBRSxwdH/2gAMAwEAAhEDEQA/AKKl4nR8zy5dIcv0+pCgkq/UKIgn+Thm6fhxQokJt/p0tLVtUrxeDzsWBNO4oH5CSPe+3nHNpuc0uGXULpVHSg7YWpTJogo2IPrHLlgaM0ZedcWhzjiBSqqk1JSmievuSUkC6IiUjxi0yplDbxCGEenM2Wl8PoaYZgcS5TsqbW9ytRc4pSQFKmJEmT384a1tQvc4NzPJQiXcw5ef1UNZoW23Lmgnkqk2XrC+qUkKtgACIicOZs9a3o8hRI4qmy7nXKnCKJ6nPGtXUqnnwsUD6T9RZWQRaexJG3iMRU+n7XUIODQDMad1IcAsFoKvgRoG2X6UpqdAtqeDdwuN/VH5TKTI7j1viintW8xMdaZj2t3v07q619DBBF4/v4TinrsvDSRygIQUhSyyOqDue0yQJgmNztIw9uz7eZIfnOvty/dheEW92Www+PnzmugNA8iWltNshwBwaKdRckQUmBaIBHjcebsalD7mm64JdBj1HCIBsRJm8cTB0w3S7dOFjAm9r9sot08r3ECyai+lb021pCtMwLD5GxPv5xtfThVFDDWdJBIniNNB05xKrbRhxywQDpwUMxjzNJEUwYxo0kBTJjGjSQFHI+3F9uSFf//Z",
  },
  {
    name: "Medtronic",
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAWlBMVEVHcEwQD+wSEOwQD+wQDu0QD+wRD+wRD+0RD+wRD+wRD+0SDusQDuwBAOz///+Af/Xt7f739/9HRvDj4/1bWfLBwfppaPN1dPQvLu+Qj/awsPghH+7T0/ygoPdypjewAAAADHRSTlMAnWCNQvegDcYhi1/JCMPtAAABR0lEQVQokX2T65KDIAyFHasVLTmA4A31/V9zE1C3dXabP2b4yElIYlH8WpOs+MPa6qFqrWvVVe0NNaXSl6nyI7x96g97vgVXSt9MVVccMxKT48NRR2zDmjQZY3qBPTsT02fOW8p9sMVZ63lgx4lGeYpmuPVEvRdPYBKudIYOLhAFOJehlpoeGbrNYiIy8P6AHZeTVFe4uGHXesfAWfNzmqKpBc5wS8S2rhtiBGYJrRkm1R522vlwBvbFoU+6Jwywo3EIAX5kGE6YZEeGwWNZsM3GYjxlU0EGNnA+LmagycJQLqjoBC7wPQ2wFpFGi4XyU1ITaBfIybguChY7HU1IM4nws5zKHe5gvObyYjjAr7Rybzy313Lio/EyMhrNJDUbw49YJ8PVHiMT4Txpuj7XsL+vyfcF47yv99V83Te7rbr/ljqH33+HH1i1IBezx/7aAAAAAElFTkSuQmCC",
  },
  {
    name: "GE Healthcare",
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAS1BMVEVHcEy2fPGeYeeYVuaHQ95+NNuIRd94K9mEP968gfKFQt2SUuNyItZpFdBiA8xxItR3K9dkCs1jCM1+MtxsG9GMP+RyJtOBPdtzJtSC9iICAAAAGXRSTlMAJUk6n5F2aYQOs2J7///Ms///Ufsg/s7maqdebgAAAYVJREFUeAFtkAUC5CAMAAeXLWkJtf+/9ODcBmfQ8AfG8n+cDzGl5H0u/6j6wW7eASZ4/sB/Sm2yr1UGqJZfHKQuXQ9iE2mHI4/f3KZ9IqfOVlR34g8brrGU9lvWirur3CUYFi5yal/LOWabMK3rSWVRidLb2QgjrXsfbu3ihwNMZFfJaSttdtRsyfRJwwO5zJXiDhOKdaFhOHVKiRnWAum6ltnKfVOa9CV3ZyFAm4MDu1NnXcaY4zfc5UOphWeulce4MrvFxNi6fohlg/qBbxEYpJuh7e6qL8VM6fNFmzLx4Q2cHmxTiZQMYfSmvV28O925E/+yqTxcY8qy4jk452K97EmW4UQq8YJxvao3hzSiJNox5hLRhGeSPzLlfltOfXFnC+zaTclMtvKqWuCVLgeTIHOVLyzqCsrzfI2Mtuc5patzERY2XqeI6HLaV0c8B98ZkaPplHIc0lfDU/hpPSUd+z7gFG2fFdNfXNWyKLW9ibzxJ9FnA7YYl4PhH66Ua/Wb5SdfAGQtGUnhlGjqAAAAAElFTkSuQmCC",
  },
  {
    name: "Philips",
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAclBMVEX///+xxv4iZ/2+zv7P2v1fi/wxb/zo7/9tkvrF0/ywwv6Fpf2XsP2iufshZf1Mff0ARP7r8v6huf9ch/72+/sATf+Eof+TrPxEd/7W4v4AP/+etf4AVf/C0v8ASv9zl/7x9v5Tgf4CXP96nP7h6f6Kqf5Yn0qhAAAAeElEQVR4Ae2LtQEDQQDD/MyMx7z/iMENAt2rtCVc/JMojpM0Q16UVd2g7dK4rzGM0+ucl3RM8nUrhmQusR/VSWgdF++yGxgXWy6fp8LeVnkntRmrd2mdFzlkcSbzWT1K7khRDcfrFDNAAtTUElE2UUJagCxO4zsu7klBBuaCTIJkAAAAAElFTkSuQmCC",
    displayName: "Philips",
  },
];

export default function New8() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-extrabold text-gray-900 mb-6 w-full text-center">
        Explore Popular Brand Equipment
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {brands.map((b, idx) => (
          <article
            key={idx}
            className="flex items-center gap-4 p-4 bg-[#F5F5F7] rounded-lg transform hover:-translate-y-1 transition"
            role="button"
            tabIndex={0}
            aria-label={`Open ${b.displayName || b.name} store`}
          >
            <div className="w-16 h-16 rounded-full  flex items-center justify-center overflow-hidden">
              <img
                src={b.logo}
                alt={`${b.displayName || b.name} logo`}
                className="max-h-10 max-w-[70%] object-contain"
                loading="lazy"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800">
                {b.displayName || b.name}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
