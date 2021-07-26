using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppClasses
{
    public class QuadMatrix
    {
        private int[,] matrx;
        private int prdk;
        private int srednee;
        public void SetMatrix(int[,] Matrix, int Poriadok)
        {
            matrx = Matrix;
            prdk = Poriadok;
        }
        public QuadMatrix(int[,] m, int size)
        {
            matrx = m;
            prdk = size;
        }
        public void GenerateRandom(int size)
        {
            matrx = new int[size, size];
            prdk = size;
            Random rand = new Random();
            for (int i = 0; i < size; i++)
                for (int j = 0; j < size; j++)
                    matrx[i, j] = rand.Next(0, 30);
        }

        public int MaxNadPobochDiagonal
        {
            get
            {
                if (matrx == null)
                    throw new Exception();

                int max = matrx[0, 0];
                int a = prdk - 1;

                for (int i = 0; i < prdk; i++)
                    for (int j = --a; j > -1; j--)
                        if (matrx[i, j] > max)
                            max = matrx[i, j];

                return max;
            }
        }

        public int MinNadPobochDiagonal
        {
            get
            {
                if (matrx == null)
                    throw new Exception();

                int min = matrx[0, 0];
                int a = prdk - 1;
                for (int i = 0; i < prdk; i++)
                    for (int j = --a; j > -1; j--)
                        if (matrx[i, j] < min)
                            min = matrx[i, j];

                return min;
            }
        }

        public int SredneeNadPobochDiagonal
        {
            get
            {
                return (MaxNadPobochDiagonal + MinNadPobochDiagonal) / 2;
            }
        }
        public Tuple<int, int, int> GoReshenie()
        {
            if (matrx == null)
                throw new Exception();
            int min = this.MinNadPobochDiagonal;
            int max = this.MaxNadPobochDiagonal;
            int srednee = this.SredneeNadPobochDiagonal;
            this.srednee = srednee;
            var otvet = new Tuple<int, int, int>(max, min, srednee);
            return otvet;
        }

        public void Zamena()
        {
            if (matrx == null)
                throw new Exception();
            int a = 0;
            for (int i = 0; i < prdk; i++)
            {
                matrx[i, a++] = srednee;
            }
        }
        public void OutMatrix()
        {
            if (matrx == null)
                throw new Exception();

            for (int i = 0; i < prdk; i++)
            {
                for (int j = 0; j < prdk; j++)
                {
                    Console.Write(matrx[i, j].ToString() + "\t");
                }
                Console.WriteLine();
            }
        }
    }
}
