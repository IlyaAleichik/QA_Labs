using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;
using AppClasses;

namespace Tests
{
    [TestFixture]
    public class MatrixTests
    {
        [Test]
        public void Check_Max_7to7()
        {
            var matrix = new QuadMatrix(Matrix7to7, 7);
            var otvet = matrix.MaxNadPobochDiagonal;
            Assert.AreEqual(25, otvet);
        }

        

        [Test]
        public void Check_Min_5to5()
        {
            var matrix = new QuadMatrix(Matrix5to5, 5);
            var otvet = matrix.MinNadPobochDiagonal;
            Assert.AreEqual(0, otvet);
        }

        [Test]
        public void Check_Srednee_7to7()
        {
            var matrix = new QuadMatrix(Matrix7to7, 7);
            var otvet = matrix.SredneeNadPobochDiagonal;
            Assert.AreEqual(12, otvet);
        }

        public int[,] Matrix5to5
        {
            get
            {
                int[,] MTRX = {
                                 {0, 1, 3, 6, 9}, 
                                 {5, 0, 3, 1, 9}, 
                                 {8, 3, 5, 0, 1}, 
                                 {20, 1, 0, 30, 9}, 
                                 {4, 1, 3, 9, 5}
                                };
                return MTRX;
            }
        }
        public int[,] Matrix7to7
        {
            get
            {
                int[,] MTRX = {
                                 {7, 11, 13, 24, 8, 20, 3}, 
                                 {17, 25, 0, 9, 21, 13, 7}, 
                                 {1, 9, 19, 21, 14, 4, 4}, 
                                 {18, 2, 11, 12, 17, 7, 20}, 
                                 {10, 2, 7, 8, 21, 18, 8},
                                 {19, 8, 11, 21, 4, 5, 6},
                                 {12, 25, 18, 9, 1, 0, 12}
                                };
                return MTRX;
            }
        }
    }
}
