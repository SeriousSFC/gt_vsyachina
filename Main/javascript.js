var name,f,s,x;

/*
������ ������� ����������-->
var a,x,f,n;
function fact (n)
{
	var p,i;
	p=1;
	for (i=1;i<=n;i++)
	{
		p=p*i;
	}
	return p;
}
x=prompt("������� ����� ��� ����������"," ");
a=fact(x);
alert(a);
<-- ����� ������� ����������
*/
/* ��� �� ��������� ����� ��������
x=prompt("������� ����� ��� ����������"," ");
function factrec(n)
{
	var p;
	if (n==0)
	{
		p=1;
	}
	else
	{
		p=n*factrec(n-1);
	}
	return p;	
}
f=factrec(x);
alert(f);
*/
//��� ���� ������� ������ ��������� ��������
name = prompt("������� ��� ������������"," ");
s = "������, " + name;
alert (s);