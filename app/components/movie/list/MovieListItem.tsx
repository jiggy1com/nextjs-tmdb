import { Movie } from '@/app/api/graphql/generated/graphql';
import { Card } from '@components/card/Card';
import Link from 'next/link';
import { GridItem } from '@components/grid/GridItem';
import { seoFriendlyUrl, voteAverageToPercentage } from '@/app/utils/stringHelpers';
import styles from './MovieListItem.module.scss';
import { fontZalandoSans } from '@/app/utils/fonts';

type MovieListItemProps = {
    movie: Movie;
};

export function MovieListItem({ movie }: MovieListItemProps) {
    return (
        <GridItem key={movie.id}>
            <Card>
                <div className={styles.movieListItem}>
                    <Link href={`/movie/detail/${seoFriendlyUrl(movie.title ?? '')}/${movie.id}`}>
                        {/*src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}*/}

                        <img
                            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                            alt={movie.title ?? ''}
                        />
                        <div className={styles.textContainer + ' ' + fontZalandoSans.className}>
                            <p className={styles.title}>{movie.title}</p>
                            <p className={styles.releaseDate}>Release Date: {movie.release_date}</p>
                            <p className={styles.rating}>
                                Rating: {voteAverageToPercentage(movie.vote_average)}
                            </p>
                        </div>
                    </Link>
                </div>
            </Card>
        </GridItem>
    );
}
